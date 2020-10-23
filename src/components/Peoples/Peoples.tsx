import React from 'react';
import People from './People/People';
import Paginator from "../common/Paginator/Paginator";
import { peoplesDataType } from '../../types/types';
import { PeoplesSearchForm } from './PeoplesSearchForm';
import { filterType } from '../../redux/peoples-reducer';

type propsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    peoplesData: Array<peoplesDataType>
    followingInProgress: Array<number>
    onFilterChanged: (filter: filterType) => void
    // addPeople: () => void
    getFollowDelThunkCreator: (id: number) => void
    getFollowPostThunkCreator: (id: number) => void
}

let Peoples: React.FC<propsType> = ({ totalUsersCount, pageSize, currentPage, onPageChanged, ...props }) => {
    let peoplesList = () => {
        return props.peoplesData.map(peoplesData => <People
            followingInProgress={props.followingInProgress}
            key={peoplesData.id} followed={peoplesData.followed}
            photos={peoplesData.photos}
            name={peoplesData.name}
            id={peoplesData.id}
            getFollowDelThunkCreator={props.getFollowDelThunkCreator}
            getFollowPostThunkCreator={props.getFollowPostThunkCreator}
        />)
    }

    return (
        <div className="col-lg-6">
            <div className="central-meta">
                <div className="frnds">
                    <ul className="nav nav-tabs">
                        <li className="nav-item"><a className="active" data-toggle="tab">Peoples</a>
                            <span>{peoplesList().length}</span></li>
                        <PeoplesSearchForm onFilterChanged={props.onFilterChanged} />
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
export default Peoples;