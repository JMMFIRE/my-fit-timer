// Server file to seperate server code from db code
import express from "express"
import cors from "cors"
import times from "./api/times.route.js"

const app = express()

app.use(cors())
//Allows server to accept JSON in the body of the request 
app.use(express.json())

app.use("/api/v1/times", times)
app.use("*", (req, res) => res.status(404).json({error: "Not found"}))

export default app 