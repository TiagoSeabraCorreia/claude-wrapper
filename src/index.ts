import { chat } from "./claude-chat/claude-chat.js";

async function main(){
    await chat();
}

main().then(() => {
    console.log("Program exited");
});