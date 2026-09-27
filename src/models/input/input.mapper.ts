import type { Request } from "../request/request.model.js";
import type { Input } from "./input.model.js";

export async function mapRequestToInput(request: Request): Promise<Input>{
    switch(request.kind){
        case 'changeMaxTokens':
            //PromptForMaxTokens
        case 'chatWithClaude':
            
            return {

            } as any;
        case 'enableAdaptiveThinking':
        case 'enableStreaming':
        case 'exitChat':
        case 'requestedActionDoesNotExist':
            break;
        default:
            request satisfies never;
            return {} as any;
    }

    return {} as any;
}