import React, {useState} from "react";
import s from "./Paginator.module.css";
import {Pagination} from "@material-ui/lab";

type paginatorPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPaginationClickHandler: (p: number) => void,
}

const Paginator = (props: paginatorPropsType) => {
    let pagesNumber = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesNumber; i++) {
        pages.push(i)
    }
    let portionSize = 10;
    let portionCount = Math.ceil(pagesNumber/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
            <div className={s.pagination}>
                {portionNumber > 1 &&
                <button onClick={() => {setPortionNumber(portionNumber - 1)}}> Previous </button>}

                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p, index) =>
                    <span key={index} className={(props.currentPage === p) ? s.selectedPage : ""}
                          style={{cursor: "pointer"}}
                          onClick={() => {
                              props.onPaginationClickHandler(p)
                          }}> {p} </span>
                )}
                {portionCount > portionNumber &&
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}> Next </button>}
            </div>
    )

}


export default Paginator