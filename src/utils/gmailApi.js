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




export const sendMessage = (to, from, subject, message) => {
    const raw = makeBody(to, from, subject, message);
    let resource = { raw };
    var request = gapi.client.gmail.users.messages.send({
        userId: 'me',
        resource
    });
    request.execute(() => console.log());
}

const makeBody = (to, from, subject, message, threadId = false) => {
    var btoa = require('btoa');
    const threadIdLine = threadId ? "References: " + threadId + "\n" : "";
    let str = ["Content-Type: text/plain; charset=\"UTF-8\"\n",
        "MIME-Version: 1.0\n",
        threadIdLine,
        "Content-Transfer-Encoding: 7bit\n",
        "to: ", to, "\n",
        "from: ", from, "\n",
        "subject: ", subject, "\n\n",
        message
    ].join('');
    return btoa(str);
}



