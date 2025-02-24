

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
}


window.onload = () => {
    console.log("greetings");
}
