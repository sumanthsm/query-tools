import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';

const styles = theme => ({
    root: {
        flexGrow: 1
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
        width: '100%',
        border: 'none'
    }
});

class QueryForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Paper className={classes.root} style={{ margin: "70px 40px 0px 40px", width: '95%', backgroundColor: "#FFFFFF", borderTop: '6px solid #666666' }}>
                    <div style={{ paddingTop: '15px' }}>
                        <span style={{ padding: '20px 0px 10px 25px', fontSize: '20px', fontWeight: 'bold' }}>Project Details</span>
                    </div>
                    <Grid item xs={12} container justify="left" style={{ padding: '0px 20px' }}>
                        <Grid item xs={4}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="projectId" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Project Id *</label>
                                </div>
                                <InputBase
                                    id="projectId"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="projectName" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Project Name</label>
                                </div>
                                <InputBase
                                    id="projectName"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="projectMgrName" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Project Manager Name</label>
                                </div>
                                <InputBase
                                    id="projectMgrName"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container justify="left" style={{ padding: '0px 20px' }}>
                        <div style={{ paddingTop: '15px' }}>
                            <span style={{ padding: '20px 0px 10px 5px', fontSize: '15px', fontWeight: 'bold' }}>Server Details</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} container justify="left" style={{ padding: '0px 20px' }}>
                        <Grid item xs={3}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="dbName" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>DB Name *</label>
                                </div>
                                <InputBase
                                    id="dbName"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="serverName" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Server Name *</label>
                                </div>
                                <InputBase
                                    id="serverName"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="hostName" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Host Name</label>
                                </div>
                                <InputBase
                                    id="hostName"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="managerEmail" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Manager Email *</label>
                                </div>
                                <InputBase
                                    id="managerEmail"
                                    value={''}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={''}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <div style={{ padding: '30px 5px', height: '80px' }}>
                        <Button
                            variant="outlined"
                            style={{ margin: '0px 20px', backgroundColor: '#666666', color: 'white', float: 'right' }}
                            onClick={this.handleSubmmit}
                        >
                            <span style={{ padding: '0 15px', fontWeight: 'bold', fontSize: '12px' }}>SUBMIT</span>
                        </Button>
                        <Button variant="outlined" style={{ float: 'right' }} onClick={this.onCancelButtonClick}>
                            <span style={{ padding: '0 15px', fontWeight: 'bold', fontSize: '12px' }}>RESET</span>
                        </Button>
                    </div>
                </Paper>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(QueryForm);