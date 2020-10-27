import React from 'react';
import { Friend } from './Friend';
import { useSelector } from 'react-redux';
import { appStateType } from '../../redux/redux-store';

type propsType = {

}

const Friends: React.FC<propsType> = (props) => {

	const friends = useSelector((state: appStateType) => state.friendReducerKey.friends)

	let friendList = () => {
		return friends.map(friends => < Friend key={friends.id}
			id={friends.id} name={friends.name} photos={friends.photos} />)
	}

	return (
		<div class="widget friend-list stick-widget">
			<h4 class="widget-title">Friends</h4>
			<ul id="people-list" class="friendz-list">

				{friendList()}
			</ul>
		</div>
	);
}
export default Friends;
