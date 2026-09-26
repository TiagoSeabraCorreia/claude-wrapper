import Anthropic from "@anthropic-ai/sdk";
import { promptUser } from "../console-reader.js";
import { getUserConfig } from "../message-handler/message-handler.js";
import type { UserConfig } from "../message-handler/message-handler.js";

interface RuntimeData {
    userConfig: UserConfig;
    client: Anthropic | null;
}

const runtimeData: RuntimeData = {
    userConfig: getUserConfig(),
    client: null
}

function _init(){
    if (runtimeData.client === null){

    }
}

function showMenu(maxTokens: number): void{
    console.log("What would you like to do today?");
    console.log("1. Chat with claude");
    console.log("2. Enable adaptive thinking");
    console.log("3. Enable streaming");
    console.log(`4. Change max_tokens (current value is ${maxTokens})`);    
}

export async function chat() {
    _init();
    let run = true;

    while(run === true) {
        console.log("Welcome to the cluade SDK wrapper");
        showMenu(runtimeData.userConfig.maxTokens);
        await promptUser("Command >");
        run = false;
    }
}

async function sendMessageToClaude(client: any){
    const message = await client.messages.create({
        model: "claude-opus-5",
        max_tokens: 1024,
        messages: [{ role: "user", content: "Hello, world" }],
    });

    console.log(message.content[1].text);
};

function retrieveApiKeyFromEnv(){
    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey){
        console.log("Please create a `.env` file in the root with a property named `ANTHROPIC_API_KEY`");
        return;
    }
    
    console.log('Anthropic SDK key found!');
    return apiKey;
}
