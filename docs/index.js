const SERVER = "172.31.180.59:3000";
async function renderMessages() {
    const msg = await fetch(`${SERVER}/messages`);
    const messages = JSON.parse(await msg.text());
    console.log(messages);
    const p = document.createElement("p");
    for (const message of messages) {
        p.appendChild(document.createTextNode(message.content));
    }
}
window.onload = async () => {
    const buttonSubmit = document.getElementById("button_submit");
    const textboxMessage = document.getElementById("textbox_message");
    renderMessages();
    buttonSubmit.onclick = () => {
        const msg = textboxMessage.value;
        console.log("Submitted Message", msg);
    };
    console.log("greetings");
};
export {};
