
import React, { useState } from 'react';
import { sendMessage } from '../utils/gmailApi';
import './../assets/css/NewMailForm.scss';
import close from './../assets/icons/close-512.png';


const NewMailForm = () => {
    const [to, setTo] = useState('');
    const [toIsBlur, setToIsBlur] = useState(false);

    const [object, setObject] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(to, 'hackatong4@gmail', object, content)

    }

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
            <textarea type="text" value={content} onChange={(e) => setContent(e.target.value)} />
            <input type="submit" value="Envoyer" />
        </form>
    )
}

export default NewMailForm;