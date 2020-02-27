import React from 'react';
import './assets/css/App.scss';
import GmailConnect from './components/ConnectBtn';
import HeaderComponent from "./components/Header/HeaderComponent";
import MailboxComponent from "./components/Mailbox/MailboxComponent";

function App() {
    return (
        <div className="App">
            {/*<GmailConnect/>*/}
            <HeaderComponent/>
            <main className={"mainContainer"}><MailboxComponent/>
            </main>
        </div>
    );
}

export default App;
