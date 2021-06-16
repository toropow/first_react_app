import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialog = (props) => {
    let dialogData = [
        { 'id': 1, 'name': 'Anton' },
        { 'id': 2, 'name': 'Baton' },
        { 'id': 3, 'name': 'Batman' },
    ]

    let messageData = [
        { 'id': 1, 'message': 'Hi' },
        { 'id': 2, 'message': 'How are you?' },
        { 'id': 3, 'message': 'Yo dude!' },
    ]

    let dialogsElemets = dialogData
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);

    let messagesElemetns = messageData
        .map(message => <Message message={message.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElemets}
            </div>
            <div className={s.messages}>
                {messagesElemetns}
            </div>
        </div>
    )
}

export default Dialog