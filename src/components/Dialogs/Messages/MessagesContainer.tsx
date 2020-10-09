import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { actions } from '../../../redux/dialogs-reducer';
import { appStateType } from '../../../redux/redux-store';
import { messagesDataMe, messagesDataYou } from '../../../types/types';
import { Messages } from './Messages';


type mapStatePropsType = {
    messagesDataYou: Array<messagesDataYou>
    messagesDataMe: Array<messagesDataMe>
}
type mapDispatchToPropsType = {
    addMessage: (value: string) => void
}
type ownPropsType = {}
type propsType = {
    messagesDataYou: Array<messagesDataYou>
    messagesDataMe: Array<messagesDataMe>
    addMessage: (newMessageText: string) => void
}

class MessagesContainer extends React.Component<propsType> {

    render() {
        return (
            <Messages {...this.props} />
        );
    }
}


let mapStateToProps = (state: appStateType): mapStatePropsType => {
    return {
        messagesDataYou: state.dialogsReducerKey.messagesDataYou,
        messagesDataMe: state.dialogsReducerKey.messagesDataMe,
        // newMessageText: state.dialogsReducerKey.newMessageText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: (value) => {
            dispatch(actions.addMessageActionCreator(value));
        }
    }
}
export default connect<mapStatePropsType, mapDispatchToPropsType, ownPropsType, appStateType>(mapStateToProps, mapDispatchToProps)(MessagesContainer);



