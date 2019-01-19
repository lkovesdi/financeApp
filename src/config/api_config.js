const ENV = {
    local: {
        baseURL: "http://localhost:5000",
    }
};

const chosenEnv = ENV.local;

export const host = chosenEnv.baseURL;
