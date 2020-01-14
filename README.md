# demystifying-webpack

### In this example we:

1.) create a `header.js` module that includes a jQuery component.

2.) import that module into `a.js`, and `b.js` entrypoints but not into `c.js` entrypoint.

3.) Add common chunk logic into the webpack config that takes any module dependeny that appears at least twice and extracts that module code out of the entrypoint file and into a new `commons.js` file that gets included on every entrypoint page. 

### Results
The jQuery component runs in both A and B entrypoints but not in C entrypoint even though the jQuery Header component is included in the common js file. Why? If you look in the common js file you'll see it's wrapped with webpack specific logic. 
https://github.com/stephenfairchild/demystifying-webpack/blob/bb4dea8191786c3fca1080fecbfe925e1164c312/dist/common.js#L1

This prevents the code from running when it's not called upon. Therefore it's important that every page includes an entry point page that actually calls the dependency. The benefit of common.js is this file can now be cached long term and with the code extracted from entrypoints, the entrypoints are now small and decrease page load times and increase performance.

See image below:

![A B C Comparison](misc/comparison.png?raw=true "A B C Comparison")

