import express from "express";
const app = express();
const PORT = 3000;
let messages = [];
messages.push({
    author: "John Doe",
    content: "sup",
});
app.use(express.static("../docs/"));
app.get('/messages', (_req, res) => {
    res.json(messages);
});
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
