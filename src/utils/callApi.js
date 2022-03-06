import axios from "axios";

export default function callApi(method = 'GET', data, url) {
    url = 'https://www.metaweather.com/api/location/' + url;
    return axios({
        method,
        url,
        data
    })
}