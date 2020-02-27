/* global gapi */
import React, { useState, useEffect } from 'react';

var CLIENT_ID = '1088916242183-tib4nmp4ck66o5qqi2q4dlt0a7fao2qt.apps.googleusercontent.com';
var API_KEY = 'AIzaSyDxs4opGT9OUOq0_6ZAb8SoZO00LsACiJM';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://mail.google.com/';

const GmailConnect = () => {
  const handleClientLoad = () => {
    gapi.load('client:auth2', initClient);
  }
  let script = document.createElement("script");
  script.src = "https://apis.google.com/js/client.js";
  script.async = true;
  script.onload = () => handleClientLoad();
  document.body.appendChild(script);


  const initClient = () => {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(function () {
      // Listen for sign-in state changes.
      console.log('ok');
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

      // Handle the initial sign-in state.
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    }).catch((err) => {
      console.log(err);
      appendPre(JSON.stringify(err, null, 2));
    })
  }

  const updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
      listLabels();
    } else {
    }
  }

  /**
   *  Sign in the user upon button click.
   */
  const handleAuthClick = async (event) => {
    console.log(gapi.auth2.getAuthInstance());
    gapi.auth2.getAuthInstance().signIn();
  }

  /**
   *  Sign out the user upon button click.
   */
  const handleSignoutClick = (event) => {
    gapi.auth2.getAuthInstance().signOut();
  }

  /**
   * Append a pre element to the body containing the given message
   * as its text node. Used to display the results of the API call.
   *
   * @param {string} message Text to be placed in pre element.
   */
  const appendPre = (message) => {
    var pre = document.getElementById('content');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
  }

  /**
   * Print all Labels in the authorized user's inbox. If no labels
   * are found an appropriate message is printed.
   */
  function listLabels() {
    gapi.client.gmail.users.labels.list({
      userId: 'me'
    }).then(function (response) {
      console.log(response);
      var labels = response.result.labels;
      appendPre('Labels:');

      if (labels && labels.length > 0) {
        for (let i = 0; i < labels.length; i++) {
          var label = labels[i];
          appendPre(label.name)
        }
      } else {
        appendPre('No Labels found.');
      }
    });
  }


  return (
    <div>
      <pre id="content"></pre>
      <button id="authorize_button" onClick={() => handleAuthClick()}>Authorize</button>
      <button id="signout_button" onClick={() => handleSignoutClick()}>Sign Out</button>
      <h1>GAPI is loaded and ready to use.</h1>
    </div>
  );
}

export default GmailConnect;