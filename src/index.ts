import { chat } from "./chat/chat.js";

async function main(){
    await chat();
}

main().then(() => {
    console.log("Program exited");
});