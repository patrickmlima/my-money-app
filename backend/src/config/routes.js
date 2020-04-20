const express = require('express');
const auth = require('./auth');

module.exports = (server) => {

  // protected routes - JWT token
  const protectedAPI = express.Router();
  server.use('/api', protectedAPI);

  protectedAPI.use(auth);

  const BillingCycle = require('../api/billingCycle/billingCycleService');
  BillingCycle.register(protectedAPI, '/billing-cycles')

  // open routes
  const openAPI = express.Router();
  server.use('/oapi', openAPI);
  
  const AuthService = require('../api/user/AuthService');
  openAPI.post('/login', AuthService.login);
  openAPI.post('/signup', AuthService.signup);
  openAPI.post('/validateToken', AuthService.validateToken);
}
