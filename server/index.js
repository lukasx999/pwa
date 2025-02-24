import express from "express";
const app = express();
const PORT = 3000;
let messages = [];
messages.push({
    author: "John Doe",
    content: "sup",
});
app.get('/messages', (_req, res) => {
    res.json(JSON.stringify(messages));
});
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
