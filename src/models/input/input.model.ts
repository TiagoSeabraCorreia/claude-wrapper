
interface ChatWithClaudeInput{
    messageForClaude: string;
};

interface ChangeMaxTokensValueInput{
    newValue: number;
}

interface NoValueInput {
    kind: 'enableAdaptiveThinking' | 'exit' | 'unknownAction' | 'enableStreaming'
}



export type Input = 
    | ChatWithClaudeInput
    | ChangeMaxTokensValueInput
    | NoValueInput;