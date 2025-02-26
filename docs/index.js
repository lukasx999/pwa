const SERVER = "http://172.31.182.140:3000";
async function renderMessages() {
    const res = await fetch(`${SERVER}/messages`);
    const messages = await res.json();
    const ul = document.getElementById("message_list");
    ul.innerHTML = ""; // clear list
    for (const message of messages) {
        const li = document.createElement("li");
        li.innerHTML = `[${message.author}] ${message.content}`;
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
    setInterval(renderMessages, 500);
    buttonSubmit.onclick = async () => buttonSubmitClick(textboxMessage.value);
}
window.onload = main;
export {};
