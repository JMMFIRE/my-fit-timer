import http from "../http-common";

class TimerDataServices {
    getAll(page = 0) {
        return http.get(`?page=${page}`);
    }

    createTime(data) {
        return http.post(data);
    }

    deleteTime(id) {
        return http.delete(`?id=${id}`);
    }
}
export default new TimerDataServices();