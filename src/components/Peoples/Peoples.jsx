import Axios from 'axios';
import React from 'react';
import People from './People/People';
import * as axios from 'axios';



const Peoples = (props) => {

    if (props.peoplesData.length===0) {
        
        props.setPeoples([
            { id: 1, name: 'Neclos Cage', friend: true, about: "Ftv Model",}, //imageUrl: require("../components/images/resources/friend-avatar9.jpg") },
            { id: 2, name: 'Sophia Gate', friend: false, about: "Tv Actresses",}, //imageUrl: require("../components/images/resources/nearly1.jpg") },
            { id: 3, name: 'Sarah Grey', friend: true, about: "Work At IBM",},// imageUrl: require("../components/images/resources/friend-avatar4.jpg") },
            { id: 4, name: 'Sexy Cat', friend: false, about: "Student",}// imageUrl: require("../components/images/resources/nearly3.jpg") }
    
        ])
    }

    let peoplesElement = props.peoplesData.map(peoplesData => <People unFriend={props.unFriend} addFriend={props.addFriend} key={peoplesData.id} friend={peoplesData.friend} about={peoplesData.about} imageUrl={peoplesData.imageUrl} name={peoplesData.name} id={peoplesData.id} />)
    let quantity = props.peoplesData.length;

    return (
        <div class="col-lg-6">
            <div class="central-meta">
                <div class="frnds">
                    <ul class="nav nav-tabs">
                        <li class="nav-item"><a class="active" data-toggle="tab">Peoples</a> <span>{quantity}</span></li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active fade show " id="frends" >
                            <ul class="nearby-contct">
                                {peoplesElement}
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
