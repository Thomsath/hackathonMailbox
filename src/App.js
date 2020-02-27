/* global gapi */

import React, { useEffect, useState } from 'react';
import ConnectBtn from './components/ConnectBtn';
import logo from './logo.svg';
import './assets/css/App.scss';
import HeaderComponent from "./components/Header/HeaderComponent";
import EmailListing from "./components/Listing/EmailListing";
import MailboxComponent from "./components/Mailbox/MailboxComponent";
import LoginComponent from "./components/Login/LoginComponent";
import MailContent from "./components/Mailbox/MailContent";
import NewMailForm from "./components/NewMailForm";
const CLIENT_ID = '1088916242183-tib4nmp4ck66o5qqi2q4dlt0a7fao2qt.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDxs4opGT9OUOq0_6ZAb8SoZO00LsACiJM';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];
const SCOPES = 'https://mail.google.com/';

const App = () => {
  const [gapiIsReady, setGapiIsReady] = useState(false)
  const [selectedMail, setSelectedMail] = useState(null);
  const [showNewMessage, setShowNewMessage] = useState(false);
  const [nbMessages, setNbMessages] = useState(0)


  useEffect(() => {
    let script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";
    script.async = true;
    script.onload = () => {
      gapi.load('client', () => {
        gapi.client.setApiKey(API_KEY);
        gapi.client.load('gmail', 'v1', () => {
          gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
          }).then(() => {
            setGapiIsReady(true)
            if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
              console.log('connected')
            } else {
              console.log('disconnected')
            }
          }).catch((err) => {
            console.log(err)
          })
        });
      });
    };
    document.body.appendChild(script);
  }, []);

  const onClickNewMessage = () => {
    setShowNewMessage(true);
  };

  const onClickEmailListingInput = () => {
    setShowNewMessage(false);
  };

  return (
    <div className="App">
      {/* <LoginComponent /> */}
      {
        gapiIsReady &&
        <>
          <HeaderComponent showNewMessage={onClickNewMessage} nbMessages={nbMessages} />
          <main className={"mainContainer"}>
            <MailboxComponent />

            <EmailListing selectedMail={setSelectedMail} setShowNewMessage={onClickEmailListingInput} setNbMessages={setNbMessages} />
            {showNewMessage &&
              <NewMailForm />
            }
            {!showNewMessage &&
              <MailContent selectedMail={selectedMail} />
            }
            }
                    </main>
        </>
      }
    </div>
  );
}

export default App;
