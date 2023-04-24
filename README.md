

# Screenshot for the UI

![React App](https://imgur.com/6TN1mq4.jpg)
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Create the React project using 'create-react-app' command:
```
npx create-react-app my-app
cd my-app
```
## Install the 'axios' package, which we will use to make API calls to the TOM API:

```
npm install axios
```

## Create a new file called 'DrinkChoiceForm.js' in the 'src' folder

- drinkchoice.js file  contain code to interact with the API and perform operations related to the Drink Choice model. This includes retrieving data from the API, sending data to the API to make predictions or perform other operations, and handling responses from the API.
- Also it contain code to define or implement specific features or functionality related to the Drink Choice model within the React application, such as handling user input, displaying output, or managing state. Ultimately, the specific implementation of drinkchoice.js would depend on the specific requirements and design of the application.

## Render and import the 'DrinkChoiceForm.js' component in the 'App.js' file. 
When you run the application (npm start), it will fetch metadata from the TOM API and display the model name and input variables in a form. When the form is submitted, it will query the model and display the decision on the screen (in this example, it just logs the decision to the console). I replace the TOM API URLs with my own API endpoints.

## Enhnacing the Web Application 
- Adding functionality to store data gathered from the TOM API: To store data gathered from the TOM API, I used a state management library like Redux or React Context. I created a  global state to store the fetched metadata and decision results, and update it whenever a new API call is made. This would allow us to easily access the data throughout the application, and persist it between page refreshes.
- Security consideration: When making API calls from a web application, it's important to consider security. Here are a few security measures  to implement:
 1) Use HTTPS: Use HTTPS to encrypt all data transmitted between the client and server, and ensure that all API endpoints are only accessible via HTTPS.
 2) Implement authentication: Require users to authenticate before making API calls, using techniques like cookies, tokens or session IDs.
 3) Implement rate limiting: Limit the number of API requests that can be made by a single user, to prevent abuse or DoS attacks.
 4) Sanitize input: Validate and sanitize all input received from users, to prevent XSS attacks and SQL injection.

- Adding batch functionality of the TOM API: 

To add the batch functionality of the TOM API, i modify the DrinkChoiceForm component to allow the user to input multiple sets of input variables at once. When the form is submitted, the component would send a batch request to the API, containing all of the input sets, and receive a batch response containing all of the decisions. You could then display in a table or list format.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
