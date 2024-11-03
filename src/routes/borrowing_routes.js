const express = require("express");
const BorrowingController = require("../controllers/borrowing_controller");

const borrowingRouter = express.Router();

borrowingRouter.get("/borrow/book/list", BorrowingController.getAll);
borrowingRouter.post("/borrow/book", BorrowingController.create);
borrowingRouter.post("/borrow/book/return", BorrowingController.return);
borrowingRouter.delete("/borrowing/:id", BorrowingController.delete);

module.exports = borrowingRouter;