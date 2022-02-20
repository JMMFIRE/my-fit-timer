import express from "express"

const router = express.Router()

router.route("/").get((req, res) => res.send("test this route"))

export default router