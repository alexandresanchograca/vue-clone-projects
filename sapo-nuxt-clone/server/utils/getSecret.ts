import {SecretManagerServiceClient} from "@google-cloud/secret-manager";

const secretManagerClient = new SecretManagerServiceClient();
let secretValue = null;
const getSecretValue = async (): Promise<any> => {
    if(secretValue) {
        return secretValue;
    }

    const  { newsApiSecretPath }= useRuntimeConfig();
    try {
        const request = {
            name: newsApiSecretPath,
        }

        const response = await secretManagerClient.accessSecretVersion(request);
        secretValue = response?.length ? response[0].payload.data.toString() : null;
        return secretValue;
    } catch (err) {
        console.log("error:", err);
    }
}

export default getSecretValue;