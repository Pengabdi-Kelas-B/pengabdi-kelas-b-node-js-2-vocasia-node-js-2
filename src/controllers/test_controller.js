<<<<<<< HEAD
const testController = {}

testController.healthCheck = (req,res) => {
    // logic menggunakan models
=======

const testController = {}

testController.healthCheck = (req,res) => {
>>>>>>> b15b488b6db2b15957bcdd0db010b3ec737a56a9
    res.status(200).json({
        ping : "pong !"
    })
}

module.exports = testController