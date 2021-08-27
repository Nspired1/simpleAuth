# Frontend for Barker

This started as a basic React app that takes in user input for authorization and authentication. Asks user for username, email, and password. Sends to backend server for registering user or logging in user.

This repo morphed into a React frontend for Barker, which is a Twitter clone but with dogs. Uses React's Context for state management for register, login, logout, and error messages.

There were issues with an Express server backend that uses passport with passport-local, which rely on username and password from user and also cookies and session from server to browser. Passport-local sends a user when a user successfully signs in, but it is difficult to "grab" the session and/or signed cookie to use for the React Router.

Looking at the React Router documentation on authorization you create a property like isAuthenticated and set it to true or false depending on the response from the server. The request/responses were tricky and took reading the documents and experimenting with axios to find out that setCredentials needed to be set to true in order for a user and session to be sent.
