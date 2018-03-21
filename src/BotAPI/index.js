import { ApiAiClient } from "api-ai-javascript";
 
const clientToken = '531231c88e26481095af61b0eeec2541';
const client = new ApiAiClient({accessToken: clientToken});

export function requestServer(query, callback) {
    client
    .textRequest(query)
    .then((response) => {
        let json = JSON.stringify(response);
        
        callback(response);
    })
    .catch((error) => {
        console.log ('Error : '+ error);
    });
}