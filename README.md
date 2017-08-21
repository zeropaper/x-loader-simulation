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

