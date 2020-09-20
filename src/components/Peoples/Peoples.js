import React from 'react';
import s from './Peoples.module.css';
import People from './People/People';

let Peoples = (props) => {

    let peoplesList = () => {

        return props.peoplesData.map(peoplesData => <People
            followingInProgress={props.followingInProgress}
            togglefollowingInProgress={props.togglefollowingInProgress}
            unFriend={props.unFriend} addFriend={props.addFriend}
            key={peoplesData.id} followed={peoplesData.followed}
            photos={peoplesData.photos}
            name={peoplesData.name}
            id={peoplesData.id}
        />)
    }
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div class="col-lg-6">
            <div class="central-meta">
                <div class="frnds">
                    <ul class="nav nav-tabs">
                        <li class="nav-item"><a class="active" data-toggle="tab">Peoples</a> <span>{peoplesList().length}</span></li>
                        <div style={{ marginLeft: "auto" }}>
                            {pages.map(p => {
                                return <span style={{ cursor: "pointer" }} onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p && s.active}>{p}</span>
                            })}
                        </div>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active fade show " id="frends" >
                            <ul class="nearby-contct">
                                {peoplesList()}
                            </ul>
                            <div class="lodmore"><button onClick={() => { props.addPeople() }} class="btn-view btn-load-more"></button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Peoples;