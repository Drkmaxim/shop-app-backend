const axios = require("axios");

const logInfo = async () => { 
    try {
        const log = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        console.log(log.data);
    } catch(err) {
        console.error(err);
    }
};

logInfo();

module.exports = logInfo;
