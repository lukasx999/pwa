const SERVER = "http://172.31.180.59:3000";
async function renderMessages() {
    const res = await fetch(`${SERVER}/messages`);
    const msg = await res.json();
    console.log(msg);
    /*
    const messages: Message[] = JSON.parse(await msg.text());
    const p = document.createElement("p");

    for (const message of messages) {
        p.appendChild(document.createTextNode(message.content));
    }
    */
}
window.onload = async () => {
    const buttonSubmit = document.getElementById("button_submit");
    const textboxMessage = document.getElementById("textbox_message");
    renderMessages();
    buttonSubmit.onclick = () => {
        const msg = textboxMessage.value;
        console.log("Submitted Message", msg);
    };
};
export {};
