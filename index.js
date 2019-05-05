const express = require('express');

const app = express();

app.get('*', (req, res) => {
    res.send('<h1>hello world!</h1>')
})

app.listen(9000, () => {
    console.log('starting server on port 9000');
})