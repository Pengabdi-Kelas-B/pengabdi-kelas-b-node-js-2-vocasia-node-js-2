const express = require("express")
const BorrowerController = require("../controllers/borrower_controller")

const borrowerRouter = express.Router()

borrowerRouter.get("/borrowers", Controller.getAll)
Router.get("/borrower/:id", borrowerController.getById)
borrowerRouter.post("/borrower", borrowerController.create)
borrowerRouter.put("/borrower/:id", borrowerController.update)
borrowerRouter.delete("/borrower/:id", borrowerController.delete)
borrowerRouter.post("/borrower/upload", borrowerController.uploadImage)

module.exports = BorrowerRouter