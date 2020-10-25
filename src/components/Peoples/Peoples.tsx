import React from 'react';
import People from './People/People';
import Paginator from "../common/Paginator/Paginator";
import { PeoplesSearchForm } from './PeoplesSearchForm';
import { filterType, getUsersThunkCreator } from '../../redux/peoples-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, getFollowingInProgress, getPageSize, getPeoples, getTotalUsersCount } from '../../redux/peoples-selector';
import { getFilter } from '../../redux/profile-selector';
import { useEffect } from 'react';


export const Peoples: React.FC = (props) => {
    let peoplesList = () => {
        return peoplesData.map(peoplesData => <People
            followingInProgress={followingInProgress}
            key={peoplesData.id} followed={peoplesData.followed}
            photos={peoplesData.photos}
            name={peoplesData.name}
            id={peoplesData.id}
        />)
    }

    const followingInProgress = useSelector(getFollowingInProgress)
    const peoplesData = useSelector(getPeoples)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getFilter)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersThunkCreator(currentPage, pageSize, filter));
    }, [])
    const onPageChanged = (p: number) => {
        dispatch(getUsersThunkCreator(p, pageSize, filter));
    }
    const onFilterChanged = (filter: filterType) => {
        dispatch(getUsersThunkCreator(1, pageSize, filter))
    }


    return (
        <div className="col-lg-6">
            <div className="central-meta">
                <div className="frnds">
                    <ul className="nav nav-tabs">
                        <li className="nav-item"><a className="active" data-toggle="tab">Peoples</a>
                            <span>{peoplesList().length}</span></li>
                        <PeoplesSearchForm onFilterChanged={onFilterChanged} />
                        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                            onPageChanged={onPageChanged} />
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active fade show " id="frends">
                            <ul className="nearby-contct">
                                {peoplesList()}
                            </ul>
                            <div className="lodmore">
                                <button onClick={() => {
                                    // props.addPeople()
                                }} className="btn-view btn-load-more" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}