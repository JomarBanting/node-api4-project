require("dotenv").config
const express = require('express');
const server = express();
const cors = require("cors");

server.use(express.json());
server.use(cors());

server.get('/api/hello', (req, res) => {
  res.json({
    message: "api is working"
  });
});

server.use('*', (req, res) => {
  res.send(
    "<h1>Hello, there!</h1>"
  )
});

const port = process.env.PORT || 9000;


server.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message
    })
})

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});