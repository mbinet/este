// @flow
import React from 'react';
import linksMessages from '../../common/app/linksMessages';
import { Box, PageHeader } from '../../common/components';
import { FormattedMessage } from 'react-intl';
import { Title } from '../components';

//
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCeQV3Ynnnm1m5-XwgAcXAoEyq7yA39X2Q",
  authDomain: "este-fork-f59e3.firebaseapp.com",
  databaseURL: "https://este-fork-f59e3.firebaseio.com",
  projectId: "este-fork-f59e3",
  storageBucket: "este-fork-f59e3.appspot.com",
  messagingSenderId: "445528574754"
};
firebase.initializeApp(config, "test");

const rootRef = firebase.database().ref();
export const tasksRef = rootRef.child('lol');
export const timeRef = firebase.database.ServerValue.TIMESTAMP;

function handleSubmit(event) {
  const newTask = {
    text: "HEY",
    timestamp: timeRef,
  };
  if (newTask.text.length) {
    tasksRef.push(newTask);
  }
}

const TodosPage = () => (
  <Box>
    <Title message={linksMessages.chat} />
    <FormattedMessage {...linksMessages.chat}>
      {message => <PageHeader heading={message} />}
    </FormattedMessage>
    yo
  </Box>
);

export default TodosPage;
