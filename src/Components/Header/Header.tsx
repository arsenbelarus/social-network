import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
import {AppBar, Typography, IconButton, Button, Toolbar, createStyles, Theme} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"
import {makeStyles} from "@material-ui/core/styles";

type headerPropsType = {
    isAuth: boolean
    login: string
    logout: () => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

function Header(props: headerPropsType) {

    const classes = useStyles();

    return (
        <header className={s.header}>
            <AppBar variant={"elevation"}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    {props.isAuth
                        ? <div className={s.loggedInUser}>
                            <span className={s.loggedInUserName}> {props.login} </span>
                            <Button color="inherit" onClick={props.logout}> Log out </Button>
                        </div>
                        : <div className={s.loggedInUser}>
                            <Button color="secondary">
                                <NavLink style={{margin: "10px", color: "ivory", textDecoration: "none"}} to={"/login"}> Login </NavLink>
                            </Button>
                        </div>}
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header