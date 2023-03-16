const router = require('express').Router();

const tasksRouter = require("./tasks");
const usersRouter = require("./users");

router.use('/task', tasksRouter);
router.use('/user', usersRouter);

module.exports = router;