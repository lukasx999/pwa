var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const SERVER = "localhost:3000";
function renderMessages() {
    return __awaiter(this, void 0, void 0, function* () {
        const msg = yield fetch(`${SERVER}/messages`);
        const messages = JSON.parse(yield msg.text());
        const p = document.createElement("p");
        for (const message of messages) {
            p.appendChild(document.createTextNode(message.content));
        }
    });
}
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    const buttonSubmit = document.getElementById("button_submit");
    const textboxMessage = document.getElementById("textbox_message");
    renderMessages();
    buttonSubmit.onclick = () => {
        const msg = textboxMessage.value;
        console.log("Submitted Message", msg);
    };
    const data = yield fetch(`${SERVER}/data`);
    console.log(data);
    console.log("greetings");
});
export {};
