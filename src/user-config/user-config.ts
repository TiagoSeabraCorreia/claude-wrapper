export type UserConfig = {
    maxTokens: number;
}

let userConfig: UserConfig | null = null;

export function getUserConfig(){
    if (userConfig !== null){
        return userConfig;
    }

    userConfig = {
        maxTokens: 1000
    } satisfies UserConfig;

    return userConfig;
} 

export function setMaxTokens(maxTokens: number): void{
    let helper = getUserConfig();
    helper.maxTokens = maxTokens;
}