import type { Observable} from 'rxjs';
import { promptUser } from '../console-reader.js';
import type { ChatWithClaude, Action, EnableAdaptiveThinking, EnableStreaming, ChangeMaxTokensValue, ChangeMaxTokensValueError } from './answer.model.js';
import {EMPTY, of} from 'rxjs';

export async function mapAnswerStringToDomainModel(answer: string): Promise<Observable<Action>> {
    switch (answer) {
        case '1':
            const messageForClaude = await promptUser("Message for claude >");
            return of(mapChatWithClaudeToDomainModel(messageForClaude));
        case '2':
            return of(mapEnableAdaptiveThinking());
        case '3':
            return of(mapEnableStreaming());   
        case '4':
            const newMaxTokensValue = await promptUser("New value for maxTokens >");
            return of(mapChangeMaxTokensValueToDomainModel(newMaxTokensValue));
        default:
            console.log("This command is not available");
            return EMPTY;
    }
}

function mapChatWithClaudeToDomainModel(messageForClaude: string){
    return {
        kind: 'chatWithClaude',
        messageForClaude: messageForClaude
    } satisfies ChatWithClaude;
}

function mapEnableAdaptiveThinking(){
    return{
        kind: 'enableAdaptiveThinking'
    } satisfies EnableAdaptiveThinking;
}

function mapEnableStreaming(){
    return{
        kind: 'enableStreaming'
    } satisfies EnableStreaming;
}

function mapChangeMaxTokensValueToDomainModel(newValue: string):ChangeMaxTokensValue | ChangeMaxTokensValueError{ 
    if (Number.isNaN(newValue)){
        return  {
            kind: 'NaN',
            value: newValue
        } satisfies ChangeMaxTokensValueError;
    }

    const valueCasted = Number(newValue);

    if (valueCasted > 1000){
        return  {
            kind: 'notLittleEnough',
            value: newValue
        } satisfies ChangeMaxTokensValueError;
    }
    
    return{
        kind: 'changeMaxTokens',
        newValue: valueCasted
    } satisfies ChangeMaxTokensValue;
}