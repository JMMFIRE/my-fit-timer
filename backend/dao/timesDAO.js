import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let times

export default class TimesDAO {
    static async injectDB(conn) {
        if (times) {
            return
        }
        try {
            times = await conn.db(process.env.TIMES_NS).collection("times")
        } catch (e) {
            console.error(
                `Unable to establish colelction handle in timesDAO: ${e}`,
            )
        }
    }

    static async getTimes({
        filters = null,
        page = 0,
        timesPerPage = 10,
    } = {}) {
        //Can add queries here later if we choose 
        //For now we'll just use an empty query to return all documents 
        let query
        let cursor 

        try {
          cursor = await times.find(query)
        } catch (e) {
            console.error(`Unable to issue find command ${e}`)
            return { timesList: [], totalNumTimes: 0}
        }

        const displayCursor = cursor.limit(timesPerPage).skip(timesPerPage * page)
        console.log(`Page number: ${page}`)

        try {
            const timesList = await displayCursor.toArray()
            const totalNumTimes = await times.countDocuments(query)

            return { timesList, totalNumTimes }
        } catch (e) {
            console.error(
                `Unable to convert cursor to array or problem counting documents ${e}`
            )
            return { timesList: [], totalNumTimes: 0 }
        }
    }

    static async addTime(name, startTime, endTime, difference) {
        try {
            const timeDoc = {
                name: name,
                startTime: startTime,
                endTime: endTime,
                difference: difference,
            }
            return await times.insertOne(timeDoc)
        } catch (e) {
            console.error(`Unable to post time: ${e}`)
            return { error: e }
        }
    }

    static async deleteTime(timeId) {
        try {
            const deleteResponse = await times.deleteOne({
                _id: ObjectId(timeId)
            })

            return deleteResponse
        } catch (e) {
            console.error(`Unable to delete time: ${e}`)
            return { error: e }
        }
    }
} 