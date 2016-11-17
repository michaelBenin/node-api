# node-api 

### About:

node-api is an express server organized for simplicity. 

Should you use this as a starting point for your api? A good way to know is if you answered yes to the following questions. 
 
 Do we use express and node.js latest stable version?

 Do we not need babel transpiling? 
 
 Do we not need to send html view responses?

## Quickstart:

Requirements:

node.js v6.9.1
npm v3.10.8
redis

````
redis-server
git clone git@github.com:michaelBenin/node-api.git
cd node-api
npm i
npm start
````

### Configuration:

(Optional) Create an .env file at the root of the directory. See .env.example in root.

## Commands:

### Run in dev mode:

    npm start

### Unit Tests:

    npm run unit-test

### Integration Tests:

    npm run integration-test

### JS Lint (uses eslint):

    npm run js-lint
    npm run js-lint-fix

### Generate JS Documentation:

    npm run js-doc

### Run production server (requires PM2 installed globally)

If PM2 is not installed:

    npm i pm2 -g

To run server in production mode:

    npm run prod-server

### Core Libraries:

https://github.com/expressjs/express

https://github.com/petkaantonov/bluebird/

https://github.com/gulpjs/gulp

https://github.com/mochajs/mocha

https://github.com/trentm/node-bunyan

