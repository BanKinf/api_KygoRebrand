const router = require("express").Router();
const getData = require("../scraper/scraper.js");

router.get('/', async (req, res) => {
    const data = await getData();
    res.send(data);
});

module.exports = router;