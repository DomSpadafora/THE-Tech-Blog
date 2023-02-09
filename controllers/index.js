const router = require('express').Router();

const dashboardRoutes = require('./controllers/dashboardroutes');
const homeRoutes = require('./controllers/homeroutes');
const apiRoutes = require('./api')

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;