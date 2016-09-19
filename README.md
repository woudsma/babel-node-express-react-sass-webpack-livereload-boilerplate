# Boilerplate: Babel - Node - Express - React - SASS - live reload (server/client)

I was lightly frustrated about finding a clean workflow, which supported Node, ES6, Express, React, SASS and live reload on both server and client side.  
The webpack-dev-server uses a proxy to the node.js server.  
This boilerplate does nothing more than it's title says. See 'package.json'.  
You are free to add any dependency.  
Renders 'Hello World!' and a framecounter with React, served from a node.js server with express.  

If you think something is missing, let me know!  

## Workflow
Server:  
- Node.js
- Express

Client:  
- React
- SASS

## Requirements
node v5.0+: `npm i n -g && sudo n stable`  
nodemon: `npm i nodemon -g`  
webpack: `npm i webpack -g`  

If you get permission errors, try again with `sudo`  

## Installation
1. `git clone https://github.com/mojibaked/babel-node-express-react-sass-webpack-livereload-boilerplate.git`  
2. `mv babel-node-express-react-sass-webpack-livereload-boilerplate your-project-name`  
3. `cd your-project-name`  
4. `npm install`  

## Usage
### Development
`npm run dev`  

Visit `http://localhost:3001` in your browser  

Server code is watched by nodemon, auto restarts on change.  
Client code is watched by webpack-dev-server, auto refreshes in browser on change.

### Production
`npm run production`  

Visit `http://localhost:3000` in your browser.  

You should probably add more code for production use.

## License

MIT
