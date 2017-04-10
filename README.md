# Updated version of laptop spec

## Installation

Requires node/npm.

1. `npm install`
2. `npm start` -> runs on localhost:3000
3. `npm test` to run tests

## About

Uses React and Redux, scaffolding by `create-react-app`.
Source code is in `/src` folder, most components in `/components`, entry in `/src/index.js`.

Data is hardcoded in `/data/options.json` - this is loaded into Redux state in `/reducers/laptop-reducer.js`, so could be edited at this point to load from local storage/network using a thunk function.

Tests are run with Jest (default from `create-react-app`) via `npm test`.
Tests are at the same level as the files they test.

## Other
Original version seems to have incorrect total (£1500 vs £1200)?