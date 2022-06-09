# Setup

Before running do `npm i` to install jest and the cli argument dependency

Running `npm test` runs all the jest tests without a lot of output, so the first challenge has cli wrapper.

## Part 1 – Flattening an array

Since this setup splits each challenge into seperate files that are run through npm, the arguments for each script need to be proceeded with `--` to pass the arguments to the script instead of npm itself.

Example:

```bash
npm run flatten -- --array=[1,2,3]
```

## Part 2 – Refactoring an expression tree

`npm test` runs the assertions, which should pass. Other refactoring choices are metioned as comments in `src/tree.js`
