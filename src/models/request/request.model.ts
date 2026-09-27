export interface ChatWithClaudeRequest{
    kind: 'chatWithClaude';
}

export interface EnableAdaptiveThinkingRequest {
    kind: 'enableAdaptiveThinking';
}

export interface EnableStreamingRequest {
    kind: 'enableStreaming';
}

export interface ChangeMaxTokensRequest {
    kind: 'changeMaxTokens';
}

export interface ExitRequest {
    kind: 'exitChat';
}

export interface RequestedActionDoesNotExist{
    kind: 'requestedActionDoesNotExist';
}

export type Request = 
 | ChatWithClaudeRequest
 | EnableAdaptiveThinkingRequest
 | ChangeMaxTokensRequest
 | ExitRequest
 | EnableStreamingRequest
 | RequestedActionDoesNotExist;