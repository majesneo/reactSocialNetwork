import React from 'react';
import s from './Paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div style={{marginLeft: "auto"}}>
            {pages.map(p => {
                return <span style={{cursor: "pointer"}} onClick={() => {
                    onPageChanged(p)
                }} className={currentPage === p && s.active}>{p}</span>
            })}
        </div>

    );
}
export default Paginator;