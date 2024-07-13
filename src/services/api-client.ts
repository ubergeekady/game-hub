import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f9b618a7b3874c3383ed1084ef3277b0'
    }
})