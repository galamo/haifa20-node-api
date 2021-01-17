
const axios = require("axios");
const logger = require("../logger");


const { MOVIES_API } = process.env

async function getMovies(inputValue, searchBy) {
    try {
        if (!inputValue) return;
        const { data, status } = await axios.get(`${MOVIES_API}&${searchBy}=${inputValue}`)
        const { Response, Error: errorMessage } = data;
        logger.info(`Response: ${JSON.stringify(data)}`)
        if (Response === "False") throw new Error("Error from API")
        return data.Search || [data]
    } catch (ex) {
        logger.error(`OMDB API ERROR: ${ex.message} ${ex.status}`)
        return [];
    } finally {
        console.log("this is not blocked!!!!")
    }
}

module.exports = getMovies 