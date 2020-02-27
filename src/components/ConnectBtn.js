/* global gapi */
import React, { useState, useEffect } from 'react';
import { connect, disconnect, listLabels, listMessages } from './../utils/gmailApi';
const CLIENT_ID = '1088916242183-tib4nmp4ck66o5qqi2q4dlt0a7fao2qt.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDxs4opGT9OUOq0_6ZAb8SoZO00LsACiJM';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];
const SCOPES = 'https://mail.google.com/';
const USER_ID = 'me';

const ConnectBtn = () => {
  return (
    <div>
      <pre id="content"></pre>
      <button id="authorize_button" onClick={() => connect()}>Authorize</button>
      <button id="signout_button" onClick={() => disconnect()}>Sign Out</button>
      <h1>GAPI is loaded and ready to use.</h1>
    </div>
  );
}

export default ConnectBtn;
