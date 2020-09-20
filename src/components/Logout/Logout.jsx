import React from 'react';
import { NavLink } from 'react-router-dom';





const Logout = (props) => {
    return (
        <section>
            <div class="gap100 gray-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="logout-meta">
                                <h2>logged out social network</h2>

                                <p>
                                    Please <NavLink to={"/Login"} title="">Login</NavLink> or <a href="#" title="">Register</a> now to create your own profile and have access to social network
							</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Logout;