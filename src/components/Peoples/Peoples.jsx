
import React from 'react';
import People from './People/People';
import * as axios from 'axios';
import s from './Peoples.module.css';


class Peoples extends React.Component {

    async componentDidMount() {
        const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.originalPage}&count=${this.props.pageSize}`).catch(e => e);
        this.props.setPeoples(response.data.items);
    }

    async onPageChanged  (pageNumber) {
        this.props.originalPage(pageNumber);
        const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).catch(e => e);
        this.props.setPeoples(response.data.items);
    }

    peoplesList = () => {
        return this.props.peoplesData.map(peoplesData => <People unFriend={this.props.unFriend} addFriend={this.props.addFriend} key={peoplesData.id} friend={peoplesData.friend} about={peoplesData.about} imageUrl={peoplesData.imageUrl} name={peoplesData.name} id={peoplesData.id} />)
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div class="col-lg-6">
                <div class="central-meta">
                    <div class="frnds">

                        <ul class="nav nav-tabs">
                            <li class="nav-item"><a class="active" data-toggle="tab">Peoples</a> <span>{this.props.peoplesData.length}</span></li>
                            <div style={{ marginLeft: "auto"}}>
                            {pages.map(p => {
                                return <span style={{ cursor: "pointer"}} onClick={() => { this.onPageChanged(p) }} className={this.props.originalPage === p && s.active}>{p}</span>
                            })}
                            </div>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active fade show " id="frends" >
                                <ul class="nearby-contct">
                                    {this.peoplesList()}
                                </ul>
                                <div class="lodmore"><button onClick={() => { this.props.addPeople() }} class="btn-view btn-load-more"></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Peoples;
