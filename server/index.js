import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.static("../docs/"));
//app.use(express.json())
app.use(bodyParser.json());
let messages = [];
messages.push({
    author: "John Doe",
    content: "sup",
});
app.get('/messages', (_req, res) => {
    res.json(messages);
});
app.post('/send', (req, res) => {
    const body = req.body;
    console.log(body);
    res.send(body);
});
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
