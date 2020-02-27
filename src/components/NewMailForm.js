
import React, { useState } from 'react';
import { sendMessage } from '../utils/gmailApi';
import './../assets/css/NewMailForm.scss';
import close from './../assets/icons/close-512.png';


const NewMailForm = () => {
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
            setSendValue("Votre nombre de caractère n'est pas suffisant");
            setIsDisabled(true);
        } else {
            setSendValue("Envoyer");
            setIsDisabled(false);
        }
        setContent(e);
    };

    let blurClass = (toIsBlur) ? 'blurClass' : '';
    return (
        <form onSubmit={handleSubmit} className={"newMailForm"}>
            <label>
                <span>À : </span>
                <input type="text" className={blurClass} value={to} onChange={(e) => setTo(e.target.value)} onBlur={() => setToIsBlur(true)} />
                <img src={close}></img>
            </label>
            <label>
                <span>Objet : </span>
                <input type="text" value={object} onChange={(e) => setObject(e.target.value)} />
            </label>
            <textarea type="text" value={content} onChange={(e) => setCurrentContent(e.target.value)} />
            <input type="submit" value={sendValue} disabled={isDisabled} />
        </form>
    )
}

export default NewMailForm;
