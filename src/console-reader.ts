import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = createInterface({ input, output });

export async function promptUser(prompt: string){
    return await rl.question(prompt);
}

export function closeConsoleReader(){
    rl.close();
    console.log("Console reader closed.");
}
