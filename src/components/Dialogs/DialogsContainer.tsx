import Dialogs from "./Dialogs";
import { connect } from 'react-redux';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { appStateType } from "../../redux/redux-store";


let mapStateToProps = (state: appStateType) => {
    return {
        dialogsData: state.dialogsReducerKey.dialogsData,
    }
}
let mapDispatchToProps = () => { }


// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent); //compose рефакторит этот код на аналогичный ниже
export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs) as React.ComponentType;