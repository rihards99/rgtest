## How to run the scripts

Since this setup splits each challenge into seperate files that are run through npm, the arguments for each script need to be proceeded with `--` to pass the arguments to the script instead of npm itself.

Example:

```
npm run flatten -- --array=[1,2,3]
```
