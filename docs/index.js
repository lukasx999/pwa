"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ADDRESS = "localhost:3000";
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    const buttonSubmit = document.getElementById("button_submit");
    const textboxMessage = document.getElementById("textbox_message");
    buttonSubmit.onclick = () => {
        const msg = textboxMessage.value;
        console.log("Submitted Message", msg);
    };
    const data = yield fetch(`${ADDRESS}/data`);
    console.log(data);
    console.log("greetings");
});
