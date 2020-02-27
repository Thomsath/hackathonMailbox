/* global gapi */
const USER_ID = 'me';

export const connect = (event) => {
    gapi.auth2.getAuthInstance().signIn();
};

export const disconnect = (event) => {
    gapi.auth2.getAuthInstance().signOut();
};

export const listLabels = (setLabels) => {
    gapi.client.gmail.users.labels.list({
        userId: USER_ID
    }).then((response) => {
        setLabels(response.result.labels);
    });
};


export const listMessages = (query, setMessages) => {
    gapi.client.gmail.users.messages.list({
        userId: USER_ID,
        q: query
    }).then((response) => {
        let messagesContent = [];
        response.result.messages.map((item, index, data) => {
            gapi.client.gmail.users.messages.get({
                'userId': USER_ID,
                'id': item.id
            }).then((response) => {
                messagesContent = [...messagesContent, response.result];
                if(data.length === index + 1) {
                    setMessages(messagesContent);
                }
            });

        });

    });
};



