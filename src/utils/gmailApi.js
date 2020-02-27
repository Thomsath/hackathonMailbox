/* global gapi */
const USER_ID = 'me';

export const connect = (event) => {
    gapi.auth2.getAuthInstance().signIn();
}

export const disconnect = (event) => {
    gapi.auth2.getAuthInstance().signOut();
}

export const listLabels = () => {
    gapi.client.gmail.users.labels.list({
        userId: USER_ID
    }).then((response) => {
        return response.result.labels;
    });
}


export const listMessages = (query) => {
    gapi.client.gmail.users.messages.list({
        userId: USER_ID,
        q: query
    }).then((response) => {
        return response.result.messages;
    });
}

export const getMessage = (messageId, callback) => {
    gapi.client.gmail.users.messages.get({
        'userId': USER_ID,
        'id': messageId
    }).then((response) => {
        return response.result.message;
    })
}



