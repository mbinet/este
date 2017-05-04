import React from 'react';

// export class ListMessages extends React.Component () {
//   constructor() {
//     super();
//   }
//   componentWillMount() {}
//   render() {
//     return(
//       <div>ListMessages Component</div>
//     )
//   }
// }

import firebase from 'firebase';

var finalTab = []

function loadMessages() {
  const rootRef = firebase.database().ref();
  const tasksRef = rootRef.child('messages');
  const timeRef = firebase.database.ServerValue.TIMESTAMP;

  tasksRef.on('value', snap => {
    const tasks = [];
    snap.forEach(shot => {
      tasks.push({ ...shot.val(), key: shot.key });
    });
    finalTab = tasks.map((task) => <div key={task.key}>{task.text}</div>)
    console.warn(finalTab)
    return (
      <div>
        Messages :
        {finalTab}
      </div>
    );
  });
}

const ListMessages = () => (
  <div>{loadMessages()}</div>
);

export default ListMessages;
