# Loader Simulation

## Goal

Illustrate the concepts of synchronous and asynchronous execution with callbacks and promises.
This exercise also introduces build tools like [jshint](http://jshint.com/), [browserify](http://browserify.org/) and [node-sass](https://github.com/sass/node-sass) and the `package.json` script object.

An asynchronous execution happens when the result of a function call is not immediatly returned (e.g.: [fetch()](http://devdocs.io/dom/windoworworkerglobalscope/fetch) or [XMLHttpRequest](http://devdocs.io/dom/xmlhttprequest)).
In those case, the script needs an other function to handle the rest of the process.
It is a very common thing in modern JavaScript because it always happens when you make a request to a server or ask a user the permission to access some browser features.

In this exercise, we will simulate the asynchronous execution by using `setTimeout()` and `setInterval()`.

Sometimes, you have to work with events, which will use `object.addEventListener('<name-of-the-event>', callbackFunction)`.
It has some similarities in the sense of that the `callbackFunction` is called when an event happens.

__Note:__ after the completion of each steps, you should make a commit with the name of the step (and push it).

## Steps

### Preparation

- Create a new repository called `loader-simulation`, in the `.gitignore` option, select "Node", and clone it locally.
- With your terminal, go in the folder of the exercise and initialize a npm package (using the `npm init` command).
- Once the npm initialization wizard is finished, edit the `package.json` which has been created by npm and add `"private": true,` at the beginning of the file.
- Create the `index.js`, `style.scss` and an `index.html` file.  
  In your HTML file, instead of including `index.js`, you will use `bundle.js`  
  Don't forget to add a link tag to load `style.css` (not `style.scss`!).
- Install browserify, jshint, mkdirp and cp with npm using the command `npm i --save-dev node-sass browserify mkdirp cp`
- In your `package.json` add a `script` called `prebuild` with `mkdirp docs && cp index.html docs/`. 
- Again, in your `package.json`, add a `script` called `build` with `browserify index.js -o docs/bundle.js && node-sass style.scss docs/style.css`.
- Run the following command to create the `bundle.js` file: `npm run build`.

### Create styles

- In your `style.scss` file add a selector `.loader` with
  - a `#999` background color.
  - a maximal width of `300px`
  - a height of `24px`
  - rounded corners (so that the left and right sides of the element look like 2 half circles)
- Again in your `style.scss`, inside the declaration of `.loader`, add declaration for the `.progress` selector with:
  - a `#333` background color
  - margins of `2px`
- In your HTML file, create a `div` element with the class `loader`.
- Inside the `div.loader`, create an other `div` element with the class `progress`

<details>
<summary>Result CSS</summary>

The resulting CSS should look like:

````css
.loader {
  /* loader styles */
}

.loader .progress {
  /* loader progress styles */
}
````

</details>

### Add the simulator library

- Edit your `package.json` and add `"simulate-progress": "zeropaper/xt-simulate-progress"` to the `devDependencies`
- Run `npm i` (this will install the install the new dependency)
- In your `index.js` add load `simulateProgress` using `var simulateProgress = require('simulate-progress');`.
- Build your project (`npm run build`)

__Note:_ It is rare (but it happens) that you will have to add a dependency like that (GitHub "username/repository-name").

### Add some JavaScript

- Create a function called `progressCallback`.  
  This function takes 1 argument called `percent` and changes the side of the `.progress` (to reflect the percentage loaded).
- Create a function called `finishCallback` which adds a class `finished` to the `.loader`.
- Create a function called `startSimulation` which 
  - Removes the `finished` class on the `.loader`
  - Calls the `simulateProgress` function with the `progressCallback` and `finishCallback` functions as arguments.
- Call the `startSimulation` function.

### Improve the styles

The styles are not so great, change them to:

- Make it so that the `.loader` takes the same shape as `.progress` but slightly smaller so that 2px of the `.progress` element are visible (on every sides).
- Add a `.finished` rule so that it turns the background color of the `.progress` to green.
- Set the width of the `.progress` to `0%` by default

### Linting

- Add the `jshint` (version `latest`) to the `devDependency` of your `package.json` and run `npm i`.
- Add `jshint` to your `prebuild` script (before `mkdirp` using `&&`)
- In your `index.js` add the following comment at the top of your file: `/* jshint browserify: true */`.  
  This comment instructs jshint to consider the file to be used with browserify.

### Continuous integration

- Create a `.travis.yml` file with the following content
  ````yaml
  dist: trusty
  language: node_js
  node_js:
    - "8"
  ````
- Change the `test` script of your `package.json` to `jshint index.js` (normally, we would using a testing tool, but for now, we only do linting).
- Go on [travis-ci](https://travis-ci.org/) site, register and add the repository of this exercise.

### Minification

- Add the `uglify-js` to the `devDependency` of your `package.json` and run `npm i`.
- Add a `postbuild` script to your `package.json` in which you you use `uglify` to minify the compiled `docs/bundle.js`.

### Scaling

- Remove the `startSimulation` function call.
- Put the `.loader` element inside a `div`
- Add a button next tho the `.loader` element (inside the `div` you just created).
- Add a `click` event listener to the button which will call the `startSimulation`.
- Duplicate the `div` you created and __make changes to your JavaScript__ so that when the buttons are clicked they animate their respective progress bar.  
  Use `querySelectorAll` and `forEach`, use IDs is __NOT ALLOWED__ 😋
  
![lame GIF](/progress.gif?raw=true "Should look more or less like that")

### Cleanup

It is not really elegant to have your source files (`index.js`, `index.html` and `style.scss`) at the root of your project.

- Create a folder `src` and move your source files inside it.
- Make the necessary changes to your `package.json`.