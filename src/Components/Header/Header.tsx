import React from 'react';
import s from './Header.module.css';

function Header () {
    return (
        <header className={s.header}>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQie3E0fOUC7Wzjg0m3zZMX44h4RqWOSJqM1cfgO0t2CeE2pmhc&usqp=CAU"}/>
        </header>
    )
}

export default Header