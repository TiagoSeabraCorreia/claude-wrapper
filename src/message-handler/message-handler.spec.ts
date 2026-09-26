import { describe, it, expect } from "vitest";
import { getUserConfig, setMaxTokens } from "./message-handler.js";
describe('message-handler test suite', () => {
    describe('getUserConfig', () => {
        it('should only have 1 instance for userConfig', () => {
            const userConfig = getUserConfig();
            const sameUserConfig = getUserConfig();

            expect(userConfig).toBe(sameUserConfig);
        });
    });

    describe('setMaxTokens', () => {
        it('should not create another reference upon updating maxTokens', () => {
            const userConfig = getUserConfig();
            setMaxTokens(2000);
            const sameUserConfig = getUserConfig();

            expect(sameUserConfig).toBe(userConfig);
            expect(userConfig.maxTokens).toEqual(2000);
        });

        it('should create a initial user config, when userConfig is null, and setMaxTokens', () => {
            setMaxTokens(2000);
            expect(getUserConfig().maxTokens).toBe(2000);
        });
    });
})