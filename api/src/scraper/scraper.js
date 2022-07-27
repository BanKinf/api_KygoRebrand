const fetch = require('node-fetch')
const env = require('../config/envConfig.js');
const cheerio = require("cheerio")

const getData = async () => {
    const url = env.URL
    const response = await fetch(url)
    const res = await response.text()
    const $ = cheerio.load(res)

    let eventData = []
    $("ul.event-schedule > li.event").each((i, el) => {
        const month = $(el).find("span.month").text()
        const day = $(el).find("span.date").text()
        const event = $(el).find("div.col-sm-4").text()
        const location = $(el).find("div.col-sm-3.col-md-4").text()
        const button_href = $(el).find("a.button").attr("href")
        const button_text = $(el).find("a.button").text()
        eventData.push({
            month,
            day,
            event,
            location,
            button_href,
            button_text
        })
    })

    return (
        eventData.slice(1)
    )

}

module.exports = getData