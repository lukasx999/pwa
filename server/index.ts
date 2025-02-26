import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { Message } from "../docs/common.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static("../docs/"));
app.use(express.json())
//app.use(bodyParser.json())


let messages: Message[] = [];
messages.push({
    author: "John Doe",
    content: "sup",
});


app.get('/messages', (_req, res) => {
    res.json(messages);
});

app.post('/send', (req, _res) => {
    const body: Message = req.body;
    messages.push(body);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
