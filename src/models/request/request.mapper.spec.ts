import { describe, it, expect} from "vitest";
import type { ChangeMaxTokensRequest, ChatWithClaudeRequest, EnableAdaptiveThinkingRequest, EnableStreamingRequest, ExitRequest, RequestedActionDoesNotExist } from "./request.model.js";
import { mapOptionToRequest } from "./request.mapper.js";

describe('mapOptionToRequest', () => {
    it.each([
        {
            option: '1',
            expectedRequest: {
                kind: 'chatWithClaude'
            } satisfies ChatWithClaudeRequest
        },
        {
            option: '2',
            expectedRequest: {
                kind: 'enableAdaptiveThinking'
            } satisfies EnableAdaptiveThinkingRequest
        },
        {
            option: '3',
            expectedRequest: {
                kind: 'enableStreaming'
            } satisfies EnableStreamingRequest
        },
        {
            option: '4',
            expectedRequest: {
                kind: 'changeMaxTokens'
            } satisfies ChangeMaxTokensRequest
        },
        {
            option: '5',
            expectedRequest: {
                kind: 'exitChat'
            } satisfies ExitRequest
        },
        {
            option: 'XXXXXX',
            expectedRequest: {
                kind: 'requestedActionDoesNotExist'
            } satisfies RequestedActionDoesNotExist
        }
    ])('should yield $expectedRequest.kind for $option', ({option, expectedRequest}) => {
        expect(mapOptionToRequest(option)).toEqual(expectedRequest);
    });
})