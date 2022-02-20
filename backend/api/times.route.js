import express from "express"
import TimesCtrl from "./times.controller.js"
const router = express.Router()

router
    .route("/").get(TimesCtrl.apiGetTimes)
    .post(TimesCtrl.apiPostTime)
    .delete(TimesCtrl.apiDeleteTime)

export default router