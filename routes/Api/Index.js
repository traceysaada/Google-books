const router = require("express").Router();
const postRoutes = require("./Books");

// Post routes
router.use("/Books", postRoutes);

module.exports = router;