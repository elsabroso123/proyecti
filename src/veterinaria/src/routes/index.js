//NO RESTFULL API :C

const { Router } = require("express")
const router = Router()

const { getData, insertData, deleteData, updateData } = require("../controllers/index.controller")

router.get("/getData/:tableName", getData)
router.post("/insertData", insertData)
router.delete("/deleteData/:tableName/:id", deleteData)
router.put("/updateData/:tableName/:id", updateData)

module.exports = router
