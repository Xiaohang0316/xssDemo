const express = require('express');


const app = express();
const port = 3001;
app.use(express.static('public'));
app.use(function (req, res, next) {
    res.setHeader(
        'Content-security-policy',
        `script-src 'self' https://apis.google.com;`
    )
    next();
});

app.get('/api/helloworld', (req, res) => {
    res.json({ data: 'Hello World!' })
})
const html = `<img src='https://i.newscdn.net/publisher-c1a3f893382d2b2f8a9aa22a654d9c97/2022/11/96aade6fbd470941cc2b13fb939ba174.png' alt="">`
app.get('/api/img', (req, res) => {
    res.setHeader(
        'Content-security-policy',
        `img-src 'self' https://i.newscdn.net`
    )
    res.send(html)
    res.type('.html')
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
