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
}