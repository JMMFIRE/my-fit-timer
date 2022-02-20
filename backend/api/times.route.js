import express from "express"
import TimesCtrl from "./times.controller.js"
const router = express.Router()

router.route("/").get(TimesCtrl.apiGetTimes)

export default router