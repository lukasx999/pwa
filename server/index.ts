const express = require('express');
const app = express();
const PORT = 3000;

app.get('/data', (req, res) => {
    res.json({
        "foo": "bar"
    });
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})
