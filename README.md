# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Socket connection

In order to use the socket connection for this application make sure you have running
the [wizard server](https://github.com/IgorPieruccini/wizard-server) on port 4000 and your current react app on port 3000.

The easiest way to connect and use server socket, is by using the useSocket hook.

## Environment variables
during development you will need to add to your .env
`
    REACT_APP_LOCAL_URL=YOUR_IP_ADDRESS
`