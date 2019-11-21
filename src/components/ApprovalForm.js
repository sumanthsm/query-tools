import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Swal from 'sweetalert2';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
  
const styles = theme => ({
    root: {
        flexGrow: 1,
      },
      table: {
        minWidth: 700,
        overflow: 'auto'
      },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    }
});

class ApprovalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appData: [{id: 1, name: "Query tool", racf: "ies6", dbName: "querydb", status: "Approved"}]
        }
    }
    
    render() {
        const { classes } = this.props;
        const { appData } = this.state;
        return (
            <div className={classes.root} style={{ margin: "70px 30px 15px 30px"}}>
            <h4 style={{ padding: '10px 0px 10px 10px', margin: 'auto' }}>Project Approval Form</h4>
            <Paper square={true} elevation={0} style={{ backgroundColor: "white", padding: '12px 0px 0px 10px', height: '45px', margin: '5px 0' }}>
                <Grid container >
                    <Grid item xs={2}>
                        <span>APP ID</span>
                    </Grid>
                    <Grid item xs={3}>
                        <span>APP Name</span>
                    </Grid>
                    <Grid item xs={2}>
                        <span>RACF</span>
                    </Grid>
                    <Grid item xs={3}>
                        <span>DB SERVER NAME</span>
                    </Grid>
                    <Grid item xs={2}>
                        <span>APPROVAL STATUS</span>
                    </Grid>
                </Grid>
            </Paper>
            {
                appData.map((app, i) => {
                    return (
                        <Paper square={true} elevation={0} style={{ padding: '14px 0px 0px 10px', marginTop: '2px', height: '45px' }}>
                            <Grid container >
                                <Grid item xs={2}>
                                    <span>{app.id}</span>
                                </Grid>
                                <Grid item xs={3}>
                                    <span>{app.name}</span>
                                </Grid>
                                <Grid item xs={2}>
                                    <span>{app.racf}</span>
                                </Grid>
                                <Grid item xs={3}>
                                    <span>{app.dbName}</span>
                                </Grid>
                                <Grid item xs={2}>
                                    {app.status == 'Approved' && <Tooltip title={app.status} placement="top"><CheckCircleRoundedIcon style={{color: 'green'}} title={app.status}/></Tooltip>}
                                    {(app.status == 'Rejected' || app.status == 'Disputed') && <Tooltip title={app.status} placement="top"><CloseRoundedIcon style={{color: 'red'}}/></Tooltip>}
                                    {(app.status == 'Pending' || app.status == 'In Review') && <Tooltip title={app.status} placement="top"><ErrorRoundedIcon style={{color: 'yellow'}}/></Tooltip>}
                                </Grid>
                            </Grid>
                        </Paper>
                    )
                })
            }
        </div>
        );
    }
}

export default withStyles(styles)(ApprovalForm);