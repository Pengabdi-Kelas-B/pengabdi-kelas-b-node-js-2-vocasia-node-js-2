const express = require("express")
const testController = require("../controllers/test_controller")

const testRoutes = express.Router()

testRoutes.get("/test/health",testController.healthCheck)

<<<<<<< HEAD

=======
>>>>>>> b15b488b6db2b15957bcdd0db010b3ec737a56a9
module.exports = testRoutes