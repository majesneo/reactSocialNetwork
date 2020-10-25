import React from 'react';
import People from './People/People';
import Paginator from "../common/Paginator/Paginator";
import { PeoplesSearchForm } from './PeoplesSearchForm';
import { filterType, getUsersThunkCreator } from '../../redux/peoples-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, getFollowingInProgress, getPageSize, getPeoples, getTotalUsersCount } from '../../redux/peoples-selector';
import { getFilter } from '../../redux/profile-selector';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import * as queryString from "querystring";



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
        const parsed = queryString.parse(history.location.search.substr(1)) as { term: string; page: string; friend: string }
        let actualPage = currentPage
        let actualFilter = filter
        if (parsed.page) actualPage = Number(parsed.page)
        debugger
        if (parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string }
        if (parsed.friend) actualFilter = { ...actualFilter, friend: parsed.friend === "null" ? null : parsed.friend === "true" ? true : false }
        dispatch(getUsersThunkCreator(actualPage, pageSize, actualFilter));
    }, [])

    const onPageChanged = (p: number) => {
        dispatch(getUsersThunkCreator(p, pageSize, filter));
    }
    const onFilterChanged = (filter: filterType) => {
        dispatch(getUsersThunkCreator(1, pageSize, filter))
    }
    const history = useHistory();

    useEffect(() => {
        history.push({
            pathname: "/Peoples",
            search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
        })
    }, [currentPage, filter])


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