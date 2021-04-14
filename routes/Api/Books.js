const router = require("express").Router();
const BooksController = require("../../controllers/BooksController");

// Matches with "/api/posts"
router
  .route("/")
  .get(BooksController.findAll)
  .post(BooksController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(BooksController.findById)
  .put(BooksController.update)
  .delete(BooksController.remove);

module.exports = router;