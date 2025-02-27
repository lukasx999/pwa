const PROTO = location.protocol;
const IP = "172.31.182.140";
const PORT = PROTO === "https:" ? "3000" : "4000";
const SERVER = `${PROTO}//${IP}:${PORT}`;
async function renderMessages() {
    const res = await fetch(`${SERVER}/messages`);
    const messages = await res.json();
    const ul = document.getElementById("message_list");
    ul.innerHTML = ""; // clear list
    for (const message of messages) {
        const li = document.createElement("li");
        li.innerHTML = `[${message.time}] [${message.author}] ${message.content}`;
        ul.appendChild(li);
    }
}
async function buttonSubmitClick(content) {
    const msg = {
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
    const buttonSubmit = document.getElementById("button_submit");
    const textboxMessage = document.getElementById("textbox_message");
    setInterval(renderMessages, 100);
    textboxMessage.focus();
    buttonSubmit.onclick = () => {
        buttonSubmitClick(textboxMessage.value);
        textboxMessage.value = ""; // clear textbox
    };
    textboxMessage.onkeydown = event => {
        if (event.key === "Enter") {
            buttonSubmitClick(textboxMessage.value);
            textboxMessage.value = ""; // clear textbox
        }
    };
}
window.onload = main;
export {};
