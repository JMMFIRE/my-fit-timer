import TimesDAO from "../dao/timesDAO.js";

export default class TimesController {
    static async apiGetTimes(req, res, next) {
        const timesPerPage = req.query.timesPerPage ? parseInt(req.query.timesPerPage, 10) : 10
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}

        //Pass in parameters filter, page, and timesPerPage to DAO getTimes() method 
        const { timesList, totalNumTimes } = await TimesDAO.getTimes({
            filters,
            page,
            timesPerPage
        })

        //Response when API URL is called
        let response = {
            times: timesList,
            page: page,
            filters: filters,
            entries_per_page: timesPerPage,
            total_results: totalNumTimes,
        }
        res.json(response)
    }

    static async apiPostTime(req, res, next) {
        try {
            const name = req.body.name
            const startTime = req.body.startTime
            const endTime = req.body.endTime
            const difference = req.body.difference

            const TimeResponse  = await TimesDAO.addTime(
                name, 
                startTime, 
                endTime, 
                difference,
            )
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message, TimeResponse })
        }
    }

    static async apiDeleteTime(req, res, next) {
        try {
           const timeId = req.query.id
           console.log(timeId)
           const timeResponse = await TimesDAO.deleteTime(
               timeId
           )
           res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
        
    }
}