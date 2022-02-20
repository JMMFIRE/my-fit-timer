import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import TimesDAO from "./dao/timesDAO.js"
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.TIMES_DB_URI,
    {
        wtimeout: 2500,
    }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await TimesDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})