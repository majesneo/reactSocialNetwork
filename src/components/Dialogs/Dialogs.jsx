import React from 'react';
import MessagesContainer from './Messages/MessagesContainer';
import Dialog from './Dialog/Dialog';



class Dialogs extends React.Component {

    dialogList = () => { return this.props.dialogsData.map(dialogsData => <Dialog key={dialogsData.id} imageUrl={dialogsData.imageUrl} name={dialogsData.name} id={dialogsData.id} />) }
    render() {
        
        return (
            <div class="col-lg-6">
                <div class="central-meta">
                    <div class="messages">
                        <h5 class="f-title"><i class="fa  fa-bell-o"></i>All Messages <span class="more-options"><i class="fa fa-ellipsis-h"></i></span></h5>
                        <div class="message-box">
                            <ul class="peoples">
                                {this.dialogList()}
                            </ul>
                            <MessagesContainer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Dialogs;