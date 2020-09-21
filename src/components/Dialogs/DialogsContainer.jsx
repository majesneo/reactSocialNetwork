import Dialogs from "./Dialogs";
import { connect } from 'react-redux';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsReducerKey.dialogsData,
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)


let mapDispatchToProps = () => { }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;