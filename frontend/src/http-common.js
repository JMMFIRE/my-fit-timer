import axios from "axios"

export default axios.create({
    //URL of backend server
    baseURL: "http://localhost:5000/api/v1/times",
    headers: {
        "Content-type": "application/json"
    }
});
