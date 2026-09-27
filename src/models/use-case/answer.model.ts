export interface ChatWithClaude {
    kind: 'chatWithClaude';
}

export interface EnableAdaptiveThinking {
    kind: 'enableAdaptiveThinking';
}

export interface EnableStreaming {
    kind: 'enableStreaming';
}

export interface ChangeMaxTokensValue {
    kind: 'changeMaxTokens';
    newValue: number;
}

/* export interface ChangeMaxTokensValueError {
    kind: 'tooLittle' | 'notLittleEnough' | 'NaN';
    value: string;
} */

export type Action = 
 | ChatWithClaude
 | EnableAdaptiveThinking
 | EnableStreaming
 | ChangeMaxTokensValue;