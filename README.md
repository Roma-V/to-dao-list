# Getting Started with Create React App

# Overview
This little app represents a list of to do tasks. The following functionality is implemented:
- add a new tasks; maximum input length is restricted to 20 symbols - validation is performed on input change and upon violation of the limit submit does not happen;
- show the list of tasks;
- delete a task with a designated button;
- switch completion status of a task by click on its description;
- filter tasks to show all, only active or only completed ones;
- show the quantity of tasks with each status (active, completed, all).

# Tech stack
The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Even though `npm audit` shows numerous vulnerabilities, the vulnerable packages (`browserslist`, `postcss`) are updated manually and no open issues exist.
`React` defines page structure.
`Redux` handles app state. 
`Semantin UI` defines style for components. Note that some additional styling is applied through CSS as well.

## Prerequisites for development
Install Node 14.0 or later.

## Development

To start the app in the development mode run:\
`npm start`\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Build

To builds the app for production to the `build` folder run:\
`npm run build`

It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

## Deployment

A docker file is configured to serve se project from a container. The project opens in port 5000.

Build a Docker image:\
`docker build . -t <image-name>`

Run the container bound to port 5000:\
`docker run -d -p 5000:5000 <image-name>`