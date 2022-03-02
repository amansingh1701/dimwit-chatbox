Hello, This is a SPA (Single page application) where when a user sends a message in the chat view, the same message will be echoed back which will be shown as the response message from the mirror chatbot in the chat window.# Getting Started with Create React App

In the project directory, you can run:

### `npm i`

To install all the packages

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000] to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Features of the App`
1. The Chatbot will start with asking your name, then proceed onto with the mirroring of the messages you send.
2. You can attach any form of images in the chat (.png, .jpeg, .gif etc)
3. You can delete the message by pressing the delete icon at the top.
4. The chat will be restored after refresh with all the messages
3. You can send messages either by pressing enter or pressing the send button.
4. The design is responsive.
5. You can only send a text message or a picture at a time.

### `Coding Style and Component Layout`
~Tried to follow the Airbnb's React/JSX Style Guide : https://github.com/airbnb/javascript/tree/master/react#basic-rules
~ Used localStorage to store the chats(images and texts)
~App
    |
Chat(pages)
    |
1. InputMessage to input messages
2. MessageReceived to show the sent messages
3. MessagesSent to show the messages sent by the ChatBot
4. Header to show the header with delete chat functionality

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!