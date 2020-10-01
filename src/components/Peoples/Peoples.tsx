import React from 'react';
import People from './People/People';
import Paginator from "../common/Paginator/Paginator";
import { peoplesDataType } from '../../types/types';

type propsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    peoplesData: Array<peoplesDataType>
    followingInProgress: Array<number>
    addPeople: () => void
}

let Peoples: React.FC<propsType> = ({ totalUsersCount, pageSize, addPeople, currentPage, onPageChanged, ...props }) => {

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
        <div class="col-lg-6">
            <div class="central-meta">
                <div class="frnds">
                    <ul class="nav nav-tabs">
                        <li class="nav-item"><a class="active" data-toggle="tab">Peoples</a>
                            <span>{peoplesList().length}</span></li>
                        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                            onPageChanged={onPageChanged} />
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active fade show " id="frends">
                            <ul class="nearby-contct">
                                {peoplesList()}
                            </ul>
                            <div class="lodmore">
                                <button onClick={() => {
                                    props.addPeople()
                                }} class="btn-view btn-load-more" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Peoples;