import Dialogs from "./Dialogs";
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return{
        dialogsData: state.dialogsReducerKey.dialogsData,
        isAuth: state.authReducerKey.isAuth
    }
 }

let mapDispatchToProps = () => { }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;