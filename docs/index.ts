import { Message } from "./common.js";

const SERVER = "https://172.31.182.140:3000";


async function renderMessages() {
    const res = await fetch(`${SERVER}/messages`);
    const messages = await res.json() as Message[];

    const ul = document.getElementById("message_list")! as HTMLUListElement;
    ul.innerHTML = ""; // clear list

    for (const message of messages) {
        const li = document.createElement("li");
        li.innerHTML = `[${message.author}] ${message.content}`;
        ul.appendChild(li);
    }
}


async function buttonSubmitClick(content: string) {
    const msg: Message = {
        author: "Bob",
        content: content
    };

    await fetch(`${SERVER}/send`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(msg)
    });

    console.log("Submitted Message", msg);
}


async function main() {
    const buttonSubmit = document.getElementById("button_submit")! as HTMLButtonElement;
    const textboxMessage = document.getElementById("textbox_message")! as HTMLInputElement;

    setInterval(renderMessages, 500);
    buttonSubmit.onclick = async () => buttonSubmitClick(textboxMessage.value);
}

window.onload = main;
