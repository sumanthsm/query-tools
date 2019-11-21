import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    fab: {
        backgroundColor: 'white',
        color: 'black'
    },
    inputBase: {
        backgroundColor: 'lightgrey',
        borderRadius: '3px',
        alignItems: 'left',
        padding: '0 10px',
        height: '35px',
        width: '15%',
        border: 'none'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        height: '500px'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
});

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: '',
            isLogin: false
        }
    }

    handleChange = event => {
        this.setState({ role: event.target.value })
    };

    handleSubmit = () => {

    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div style={{ paddingTop: '80px' }}>
                    <span style={{ padding: '20px 0px 20px 30px', fontSize: '20px', fontWeight: 'bold' }}>Please enter your racf to begin </span>
                    <hr />
                </div>
                <form className={classes.container} noValidate autoComplete="off">
                    <div>
                        <TextField
                            id="standard-basic"
                            className={classes.textField}
                            label="RACF"
                            margin="normal"
                        />
                    </div>
                    <div style={{ margin: '10px 10px 0 10px' }}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="role">Select Role</InputLabel>
                            <Select
                                labelId="role"
                                id="selectRole"
                                value={this.state.role}
                                onChange={''}
                            >
                                <MenuItem value={"qa"}>QA</MenuItem>
                                <MenuItem value={"developer"}>Developer</MenuItem>
                                <MenuItem value={"manager"}>Manager</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <Button
                            variant="outlined"
                            style={{ margin: '25px 10px 0px 10px', backgroundColor: '#666666', color: 'white' }}
                            onClick={''}
                        >
                            <span style={{ padding: '0 5px', fontWeight: 'bold', fontSize: '12px' }}>Login</span>
                        </Button>
                    </div>
                </form>

            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Login);