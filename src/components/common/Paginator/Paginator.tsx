import React, { useState } from 'react';
import s from './Paginator.module.css';




type propsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p:number) => void
    portionSize?: number
}

let Paginator: React.FC<propsType> = ({ totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages:Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let [portionNumber, setPortionNumber] = useState(1);
    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return (
        <div style={{ marginLeft: "auto" }}>
            {portionNumber > 1 && <button className={s.btn} onClick={() => { setPortionNumber(portionNumber - 1) }}>Right</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span style={{ cursor: "pointer", margin: "0px 3px 0px 3px" }}
                        onClick={() => { onPageChanged(p) }} className={currentPage === p && s.active}>{p}</span>
                })}
            {portionCount > portionNumber && <button className={s.btn} onClick={() => { setPortionNumber(portionNumber + 1) }}>Left</button>}

        </div>
    );
}
export default Paginator;