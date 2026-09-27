import type { ChangeMaxTokensRequest, ChatWithClaudeRequest, EnableAdaptiveThinkingRequest, EnableStreamingRequest, ExitRequest, Request, RequestedActionDoesNotExist } from './request.model.js';

export function mapOptionToRequest(option: string): Request {
    switch (option) {
        case '1':
            return {
                kind: 'chatWithClaude'
            } satisfies ChatWithClaudeRequest;
        case '2':
            return {
                kind: 'enableAdaptiveThinking'
            } satisfies EnableAdaptiveThinkingRequest;
        case '3':
            return {
                kind: 'enableStreaming'
            } satisfies EnableStreamingRequest;
        case '4':
            return {
                kind: 'changeMaxTokens'
            } satisfies ChangeMaxTokensRequest;  
        case '5':
            return {
                kind: 'exitChat'
            } satisfies ExitRequest;
        default:
            console.log("This command is not available");
            return {
                kind: 'requestedActionDoesNotExist'
            } satisfies RequestedActionDoesNotExist
    }
}

/* 
function mapChatWithClaudeToDomainModel(){
    return {
        kind: 'chatWithClaude',
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
}§ */