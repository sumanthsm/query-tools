import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import QueryForm from './QueryForm';

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
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        color: 'black',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        width: '100%',
        height: '100%'
    }
});

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : 0,
            index : 0        
        }
    }

    handleChange = (event, newValue) => {
        this.setState({value: newValue});
      }
    
      handleChangeIndex = (index) => {
        this.setState({index: index});
      }

    render() {
        const { classes } = this.props;
        const {value, index} = this.state;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <Header />
                <main className={classes.content}>
                    {/* <Login /> */}
                    <QueryForm />
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
