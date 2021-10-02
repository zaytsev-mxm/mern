const express = require('express');

const app = express();

const PORT = 5000;

app.get('/', (req, res, next) => {
    return res.json({ foo: 42 });
});

app.listen(PORT, () => {
    return console.log(`Server is running on port ${PORT}.`);
});