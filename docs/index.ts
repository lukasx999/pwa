const ADDRESS = "localhost:3000";



window.onload = () => {
    const buttonSubmit = document.getElementById("button_submit")! as HTMLButtonElement;
    const textboxMessage = document.getElementById("textbox_message")! as HTMLInputElement;

    buttonSubmit.onclick = () => {
        const msg: string = textboxMessage.value;
        console.log("Submitted Message", msg);
    };


    console.log("greetings");
}
