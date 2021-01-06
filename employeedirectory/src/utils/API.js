import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=20&nat=us";

const obj = {
    getEmployees: function () {
        return axios.get(BASEURL);
    },
};

export default obj;