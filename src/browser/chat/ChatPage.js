// @flow
import React from 'react';
import linksMessages from '../../common/app/linksMessages';
import { Box, PageHeader } from '../../common/components';
import { FormattedMessage } from 'react-intl';
import { Title } from '../components';
import type { Action, UsersState } from '../types';

//
import firebase from 'firebase';
import ListMessages from './ListMessages';


function sendMessage(msg) {
  const rootRef = firebase.database().ref();
  const tasksRef = rootRef.child('messages');
  const timeRef = firebase.database.ServerValue.TIMESTAMP;

  const newTask = {
    text: msg,
    timestamp: timeRef,
  };
  if (newTask.text.length) {
    tasksRef.push(newTask);
  }
}

function handleKeyDown(e) {
  if (e.keyCode == 13) {
    sendMessage(e.target.value)
    e.target.value = ""
  }
}

const TodosPage = () => (
  <Box>
    <Title message={linksMessages.chat} />
    <FormattedMessage {...linksMessages.chat}>
      {message => <PageHeader heading={message} />}
    </FormattedMessage>
    <ListMessages/>
    <input type="text" onKeyDown={handleKeyDown.bind(this)} placeholder="Type in your message..."/>
  </Box>
);

export default TodosPage;
