import { Message } from "./common.js";

const SERVER = "localhost:3000";


async function renderMessages() {
    const msg = await fetch(`${SERVER}/messages`);
    const messages: Message[] = JSON.parse(await msg.text());
    const p = document.createElement("p");

    for (const message of messages) {
        p.appendChild(document.createTextNode(message.content));
    }

}


window.onload = async () => {
    const buttonSubmit = document.getElementById("button_submit")! as HTMLButtonElement;
    const textboxMessage = document.getElementById("textbox_message")! as HTMLInputElement;

    renderMessages();

    buttonSubmit.onclick = () => {
        const msg: string = textboxMessage.value;
        console.log("Submitted Message", msg);
    };

    const data = await fetch(`${SERVER}/data`);
    console.log(data);

    console.log("greetings");
}
