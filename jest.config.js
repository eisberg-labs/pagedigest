/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['extension/**/*.tsx', 'extension/**/*.ts', '!extension/**/*.spec.tsx?'],
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup.ts'
  ]
};
