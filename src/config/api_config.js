const ENV = {
    local: {
        baseURL: "http://localhost:3001",
    }
};

const chosenEnv = ENV.local;

export const host = chosenEnv.baseURL;
