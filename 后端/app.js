const express = require("express");
const { search, lyric, song_url_v1 } = require('NeteaseCloudMusicApi');
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors())

const port = 3000;

app.post('/api/search', async (req, res) => {
    try {
        const result = await search({
            keywords: req.body.keywords,
            type: 1,
            limit: 10
        })
        res.json(result)
    } catch (error) {
        console.error(error)
    }
})

app.post('/api/lyric', async (req, res) => {
    try {
        const result = await lyric({
            id: req.body.id
        })
        res.json(result)
    } catch (error) {
        console.error(error)
    }
})

app.post('/api/songURL', async (req, res) => {
    try {
        const result = await song_url_v1({
            id: req.body.id,
            level:'exhigh'
        })
        console.log(result)
        res.json(result)
    } catch (error) {
        console.error(error)
    }
})

app.listen(port, () => {
    console.log(`The server running at http://localhost:${port}`);
})