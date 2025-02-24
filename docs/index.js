"use strict";
const ADDRESS = "localhost:3000";
window.onload = () => {
    const buttonSubmit = document.getElementById("button_submit");
    const textboxMessage = document.getElementById("textbox_message");
    buttonSubmit.onclick = () => {
        const msg = textboxMessage.value;
        console.log("Submitted Message", msg);
    };
    console.log("greetings");
};
