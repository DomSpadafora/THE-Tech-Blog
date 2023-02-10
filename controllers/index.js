const router = require('express').Router();

// const dashboardRoutes = require('./dashboardroutes');
const homeRoutes = require('./homeroutes');
// const apiRoutes = require('./api')

router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);
// router.use('/api', apiRoutes);

module.exports = router;