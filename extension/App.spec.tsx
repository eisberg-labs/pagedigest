import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders title', () => {
    const mockTab = { id: 1, active: true, lastFocusedWindow: true };
    const activeTabCallback = jest.fn().mockResolvedValue([mockTab]);
    // I'm just testing a title here, sendMessage is unrelevant for this testcase.
    const sendMessageCallback = jest.fn().mockResolvedValue(new Promise(() => {}));
    const queryTabs = jest.mocked(chrome.tabs.query);
    queryTabs.mockImplementation(activeTabCallback);
    const sendMessage = jest.mocked(chrome.tabs.sendMessage);
    sendMessage.mockImplementation(sendMessageCallback);

    act(() => {
      render(<App />);
    });

    const linkElement = screen.getByText(/Page Digest/i);
    expect(linkElement).toBeInTheDocument();
    expect(activeTabCallback).toHaveBeenCalledTimes(1);
    expect(sendMessageCallback).toHaveBeenCalledTimes(0);
  });
});
