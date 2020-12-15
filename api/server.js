const express = require('express');

const SchemeRouter = require('./schemes/scheme-router');
const StepRouter = require('./steps/steps-router');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);
server.use('api/steps', StepRouter);

module.exports = server;
