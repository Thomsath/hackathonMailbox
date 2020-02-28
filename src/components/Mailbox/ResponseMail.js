
import React, { useState } from 'react';
import { sendMessage } from '../../utils/gmailApi';
import './../../assets/css/NewMailForm.scss';
import close from './../../assets/icons/close-512.png';


const ResponseMail = () => {
    const [to, setTo] = useState('');
    const [toIsBlur, setToIsBlur] = useState(false);

    const [object, setObject] = useState('');
    const [content, setContent] = useState('');
    const [sendValue, setSendValue] = useState('Envoyer');
    const [isDisabled, setIsDisabled] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(to, 'hackatong4@gmail', object, content);
    };

    const setCurrentContent = (e) => {
        if(e.length < 100) {
            setSendValue("Votre nombre de caractères n'est pas suffisant");
            setIsDisabled(true);
        } else {
            setSendValue("Envoyer");
            setIsDisabled(false);
        }
        setContent(e);
    };

    let blurClass = (toIsBlur) ? 'blurClass' : '';
    return (
        <form onSubmit={handleSubmit} className={"responseMailForm"}>
            <hr />
            <textarea type="text" value={content} onChange={(e) => setCurrentContent(e.target.value)} />
            <input type="submit" value={sendValue} disabled={isDisabled} />
        </form>
    )
}

export default ResponseMail;
