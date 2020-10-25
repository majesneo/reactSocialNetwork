import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import MyPostsContainer from './components/MyPosts/MyPostsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { Route, withRouter } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import Logout from './components/Logout/Logout';
import { connect } from "react-redux";
import { compose } from "redux";
import { initializedThunkCreator } from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";
import { appStateType } from './redux/redux-store';
import { PeoplesContainer } from './components/Peoples/PeoplesContainer';
import { Login } from './components/Login/Login';
import { YourPageContainer } from './components/YourPage/YourPageContainer';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

type propsType = ReturnType<typeof mapStateToProps>
type dispatchPropsType = {
    initializedThunkCreator: () => void
}

class App extends React.Component<propsType & dispatchPropsType> {
    // catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    //     // alert("some error"); 
    // }
    componentDidMount() {
        this.props.initializedThunkCreator();
        // window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
        // handle error here, for example log
    }
    // componentWillUnmount() {
    //     window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors); //отписка от прослушивание события очистка мусора 
    // }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <React.Suspense fallback={<Preloader />}>
                <div className='app-wrapper'>
                    <HeaderContainer />
                    <div class="row">
                        <Navbar />
                        <Route path="/Dialogs" render={() => <DialogsContainer />} />
                        <Route path="/MyPosts" render={() => <MyPostsContainer />} />
                        <Route path="/Profile/:userId?" render={() => <ProfileContainer />} />
                        <Route path="/Peoples" render={() => <PeoplesContainer />} />
                        <Route path="/Profile/Logout" render={() => <Logout />} />
                        <Route path="/Login" render={() => <Login />} />
                        <Route path="/Logout" render={() => <Logout />} />
                        <YourPageContainer />
                    </div>
                </div>
            </React.Suspense>
        );
    }
}

const mapStateToProps = (state: appStateType) => ({
    initialized: state.appReducerKey.initialized
})

export default compose(connect(mapStateToProps, { initializedThunkCreator }), withRouter)(App) as React.ComponentType;