import React from 'react';
import './Header.css'
import face from '../images/resources/user-avatar2.jpg';
import back from '../images/resources/timeline-1.jpg';
import HeaderStatusContainer from './HeaderStatusContainer';



const Header = (props) => {

	return (
		<div class="feature-photo">
			<figure><img src={back} alt=""></img></figure>
			<div class="container-fluid">
				<div class="row merged">
					<div class="col-lg-2 col-sm-3">
						<div class="user-avatar">
							<figure>
								<img src={face} alt=""></img>
								<form class="edit-phto">
									<i class="fa fa-camera-retro"></i>
									<label class="fileContainer">
										Edit Display Photo
										<input type="file" />
									</label>
								</form>
							</figure>
						</div>
					</div>
					<div class="col-lg-10 col-sm-9">
						<div class="timeline-info">
							<ul>
								<li class="admin-name">
									<h5>{props.login}</h5>
									<HeaderStatusContainer />
								</li>
								<li>
									<a class="active" href="fav-page.html" title="" data-ripple="">Page</a>
									<a class="" href="notifications.html" title="" data-ripple="">Notifications</a>
									<a class="" href="inbox.html" title="" data-ripple="">inbox</a>
									<a class="" href="insights.html" title="" data-ripple="">insights</a>
									<a class="" href="fav-page.html" title="" data-ripple="">posts</a>
									<a class="" href="page-likers.html" title="" data-ripple="">likers</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Header;