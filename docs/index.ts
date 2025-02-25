import { Message } from "./common.js";

const SERVER = "http://172.31.180.59:3000";


async function renderMessages() {
    const res = await fetch(`${SERVER}/messages`);
    const messages = await res.json() as Message[];

    const div = document.getElementById("div_messages")! as HTMLDivElement;
    const p = document.createElement("p");

    for (const message of messages) {
        const msg = `[${message.author}] ${message.content}`;
        p.appendChild(document.createTextNode(msg));
    }
    div.appendChild(p);
}


window.onload = async () => {
    const buttonSubmit = document.getElementById("button_submit")! as HTMLButtonElement;
    const textboxMessage = document.getElementById("textbox_message")! as HTMLInputElement;

    renderMessages();

    buttonSubmit.onclick = async () => {
        const msg: Message = {
            author: "Bob",
            content: textboxMessage.value
        };

        await fetch(`${SERVER}/send`, {
            method: "POST",
            //headers: { 'Content-Type': 'application/json' },
            //body: JSON.stringify(msg)
            body: JSON.stringify({ foo: "bar" })
        });

        console.log("Submitted Message", msg);

    };

}
