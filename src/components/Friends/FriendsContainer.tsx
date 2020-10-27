import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFriendThunkCreator } from '../../redux/friend-reducer';
import { appStateType } from '../../redux/redux-store';
import Friends from './Friends';

type propsType = {

}

export const FriendsContainer: React.FC<propsType> = (props) => {
	const dispatch = useDispatch();
	const peoplesData = useSelector((state: appStateType) => state.peoplesReducerKey.peoplesData)
	useEffect(() => {
		dispatch(getFriendThunkCreator())
	}, [peoplesData])


	return (
		<Friends />
	);
}
