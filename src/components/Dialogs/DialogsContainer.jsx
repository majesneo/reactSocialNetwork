import Dialogs from "./Dialogs";
import { connect } from 'react-redux';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsReducerKey.dialogsData,
    }
}
let mapDispatchToProps = () => { }


// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent); //compose рефакторит этот код на аналогичный ниже
export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs);