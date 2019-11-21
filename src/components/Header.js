import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import ErrorIcon from '@material-ui/icons/Error';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    grow: {
        flexGrow: 1,
    },
    appBar: {
        width: `calc(100% - 60px)`,
        marginLeft: '60px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        color: 'black',
    },
    drawer: {
        width: '60px',
        flexShrink: 0,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    },
    drawerPaper: {
        backgroundColor: '#666666',
        width: '60px',
        overflow: 'hidden',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    }
});

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            index: 0
        }
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    }

    handleChangeIndex = (index) => {
        this.setState({ index: index });
    }

    render() {
        const { classes } = this.props;
        const { value, index } = this.state;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed"
                    className={classes.appBar}
                    style={{ backgroundColor: 'white', height: '57px'}}>
                    <Toolbar>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            onClick={this.onHomeButtonClick}
                            style={{ cursor: 'pointer' }}
                            noWrap>
                            Query Tool
                            </Typography>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <div style={{ borderLeft: '0.1em solid rgba(0, 0, 0, 0.12)', padding: '0.5em' }}>
                                <IconButton color="black" >
                                    <ErrorIcon />
                                </IconButton>
                            </div>
                            <div style={{ borderLeft: '0.1em solid rgba(0, 0, 0, 0.12)', padding: '0.5em' }}>
                                <IconButton
                                    edge="end"
                                    aria-haspopup="true"
                                    onClick=""
                                    color="black"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </div>
                            <Typography style={{ color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }} variant="span" noWrap>
                                <span>Hello,</span>
                                {/* {
                                    isLogin ? <span>{fullName}</span> : <span>User</span>
                                } */}
                            </Typography>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={classes.drawer}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <div onClick={this.onHomeButtonClick} style={{ cursor: 'pointer' }}>
                    </div>
                    <Divider />
                    <List style={{backgroundColor: 'black'}}>
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon style={{ color: 'white' }} onClick={this.onHomeButtonClick} />
                            </ListItemIcon>
                        </ListItem>
                    </List>
                    <Divider />
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles)(Header);
