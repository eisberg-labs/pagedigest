import { Command, ContentResponse } from './types';
import * as React from 'react';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { Alert } from '@mui/material';

const ValueOrProgress = ({ value }: { value?: string }) => {
  if (typeof value == 'undefined') {
    return <>N/A</>;
  }
  if (value == null) {
    return <CircularProgress />;
  } else return <>{value}</>;
};

const SeoRecord = ({ primary, secondary }: { primary: string; secondary: any }) => {
  return (
    <Stack alignContent={'center'} alignItems={'center'}>
      <Typography variant={'subtitle2'}>{primary}</Typography>
      <Typography variant={'subtitle1'} color={'#e94235ff'}>
        <ValueOrProgress value={secondary} />
      </Typography>
    </Stack>
  );
};
export default function App() {
  const [err, setErr] = useState<string | null>(null);
  const [words, setWords] = useState<number | null>(null);
  const [textHtml, setTextHtml] = useState<string | null>(null);
  const [timeToRead, setTimeToRead] = useState<string | null>(null);
  const [headings, setHeadings] = useState<number | null>(null);
  const [paragraphs, setParagraphs] = useState<number | null>(null);
  const [blocks, setBlocks] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true }).catch((err) => {
        setErr('Active tab not found!');
        throw err;
      });

      const tabId = tab.id as number;
      const contentResponse: Promise<ContentResponse> = chrome.tabs
        .sendMessage<Command, ContentResponse>(tabId, Command.GET_CONTENT);
      contentResponse.then((response) => {
          setHeadings(response.headings);
          setBlocks(response.blocks);
          setParagraphs(response.paragraphs);
          setTextHtml(response.textToHtml);
          setWords(response.words);
          setTimeToRead(response.timeToRead);
        })
        .catch(() => {
          setErr('Cannot extract webpage content!');
        });
    })();
  }, []);

  const Report = () => {
    if (err) {
      return (
        <Alert severity={'error'}>
          PageDigest is unavailable: <b>{err}</b>
        </Alert>
      );
    }
    return (
      <Grid container>
        <Grid item xs={4}>
          <SeoRecord primary="Headings" secondary={headings} />
        </Grid>
        <Grid item xs={4}>
          <SeoRecord primary="Paragraphs" secondary={paragraphs} />
        </Grid>
        <Grid item xs={4}>
          <SeoRecord primary="Blocks" secondary={blocks} />
        </Grid>
        <Grid item xs={4}>
          <SeoRecord primary="Words" secondary={words} />
        </Grid>
        <Grid item xs={4}>
          <SeoRecord primary="Text/HTML ratio" secondary={textHtml} />
        </Grid>
        <Grid item xs={4}>
          <SeoRecord primary="Time to read" secondary={timeToRead} />
        </Grid>
      </Grid>
    );
  };

  return (
    <Card sx={{ minWidth: 500 }}>
      <CardContent>
        <Toolbar disableGutters color={'primary'}>
          <img alt={'logo'} height={32} src={'/icon.svg'} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              ml: 2,
              fontWeight: 700,
              color: 'inherit',
              textTransform: 'uppercase',
            }}
          >
            Page Digest
          </Typography>
        </Toolbar>
        <Report />
      </CardContent>
    </Card>
  );
}
