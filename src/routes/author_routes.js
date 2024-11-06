const express = require("express")
const authorController = require("../controllers/author_controller")

const authorRouter = express.Router()

authorRouter.get("/authors", authorController.getAll)
authorRouter.get("/author/:id", authorController.getById)
authorRouter.post("/author", authorController.create)
authorRouter.put("/author/:id", authorController.update)
authorRouter.delete("/author/:id", authorController.delete)
authorRouter.post("/author/upload", authorController.uploadImage)



module.exports = authorRouter