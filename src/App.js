import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import MyPostsContainer from './components/MyPosts/MyPostsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import YourPageContainer from './components/YourPage/YourPageContainer';
import {Route, withRouter} from 'react-router-dom';

import PeoplesContainer from './components/Peoples/PeoplesContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Logout from './components/Logout/Logout';
import Login from './components/Login/Login';
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedThunkCreator} from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

class App extends React.Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) =>{
        alert("some error");
    }
    componentDidMount() {
        this.props.initializedThunkCreator();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
            // handle error here, for example log
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <React.Suspense fallback={<Preloader/>}>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <div class="row">
                        <Navbar/>
                        <Route path="/Dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/MyPosts" render={() => <MyPostsContainer/>}/>
                        <Route path="/Profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/Peoples" render={() => <PeoplesContainer/>}/>
                        <Route path="/Logout" render={() => <Logout/>}/>
                        <Route path="/Profile/Logout" render={() => <Logout/>}/>
                        <Route path="/Login" render={() => <Login/>}/>
                        <YourPageContainer/>
                    </div>
                </div>
            </React.Suspense>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.appReducerKey.initialized
})

export default compose(connect(mapStateToProps, {initializedThunkCreator}), withRouter)(App);
