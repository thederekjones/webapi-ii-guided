// Where our server is defined

const express = require('express');

const HubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(express.json());
server.use('/api/hubs', HubsRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.get('/api/messages', (req, res) => {
  // sends back a master list of all messages
});

server.get('*', (req, res) => {
  res.status(404).send(`
    <h2>Page Not Found</h>
    <p>Maybe your URL is wrong? Hmmm...</p>
  `);
});

// **************************************** //
// ******** PROMISE VS ASYNC/AWAIT ******** //
// **************************************** //
//
// const asyncAwait = async (req, res) => {
//   //promise style
//   Hubs.find({})
//     .then(hubs => {
//       res.json(hubs);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });

//   // will not work with an async method
//   // hubs well be undefined
//   const hubs = Hubs.find({});

//   //async await style
//   try {
//     const hubs = await Hubs.find({});
//     res.json(hubs);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

module.exports = server;
