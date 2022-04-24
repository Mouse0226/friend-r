const router = require('express').Router();
// const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

// router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>404 Not Found!</h1>');
});

module.exports = router;