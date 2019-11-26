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
        this.state = {
            projectId: '',
            projectName: '',
            projectMgrName: '',
            dbName : '',
            hostName: '',
            portNumber: '',
            isSqlServer : false,
            sqlQuery: '',
            errors: []
        }
    }

    handleDb = e => {
        console.log(this.state.isSqlServer);
        
        this.setState(prevState => ({
            isSqlServer: !prevState.isSqlServer
          }));
    }

    handleChange = e => {
        const id = e.target.id;
        console.log(id, "id");
        
        if(id === 'projectId'){
            this.setState({projectId: e.target.value})
        }else if(id === 'projectName'){
            this.setState({projectName: e.target.value})
        }else if(id === 'projectMgrName'){
            this.setState({projectMgrName: e.target.value})
        }else if(id === 'dbName'){
            this.setState({dbName: e.target.value})
        }else if(id === 'hostName'){
            this.setState({hostName: e.target.value})
        }else if(id === 'portNumber'){
            this.setState({portNumber: e.target.value})
        }else if(id === 'projectName'){
            this.setState({projectName: e.target.value})
        }else if(id === 'sqlQuery'){
            this.setState({sqlQuery: e.target.value})
        }
        
    }

    handleReset = e => {
        // clear
    }

    handleSubmmit = e => {
        if(this.state.errors.length === 0){
            // do submit
        }
    }

    handleValidate = e => {
        const errors = [];
        const {sqlQuery} = this.state;
        if(sqlQuery.indexOf("*") !== -1){
            errors.push({text: "Query contains *, please cross check your query."});
        }
        if(sqlQuery.indexOf("where") === -1){
            errors.push({text: "Query doesn't contains where condition."});
        }
        this.setState({errors});
    }

    render() {
        const { classes } = this.props;
        const { projectId, projectName, projectMgrName, dbName, hostName, portNumber, sqlQuery} = this.state;
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
                                    value={projectId}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={this.handleChange}
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
                                    value={projectName}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={this.handleChange}
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
                                    value={projectMgrName}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container justify="left" style={{ padding: '0px 20px' }}>
                        <div style={{ paddingTop: '15px' }}>
                            <span style={{ padding: '20px 0px 10px 0px', fontSize: '20px', fontWeight: 'bold' }}>Server Details</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} container justify="left" style={{ padding: '0px 20px' }}>
                        <div style={{ paddingTop: '15px' }}>
                        <select
                                id="status"
                                defaultValue={"SQL Server"}
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '5px',
                                    width: '300px',
                                    alignItems: 'left',
                                    padding: '12px',
                                    margin: '3px',
                                    border: '1px solid rgba(0, 0, 0, 0.12)'
                                }}
                                onChange={this.handleDb}
                            >
                                <option value="SQL Server">SQL Server</option>
                                <option value="PostgreSQL">PostgreSQL</option>
                            </select>
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
                                    value={dbName}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={this.handleChange}
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
                                    value={hostName}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{ padding: '10px 5px' }}>
                                <div>
                                    <label htmlFor="portNumber" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>Port Number</label>
                                </div>
                                <InputBase
                                    id="portNumber"
                                    value={portNumber}
                                    variant="outlined"
                                    className={classes.inputBase}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container justify="left" style={{ padding: '0px 20px' }}>
                        <div style={{ padding: '10px 5px', width: '100%' }}>
                            <div>
                                <label htmlFor="sqlQuery" style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>SQL Query*</label>
                            </div>
                            <textarea
                                id="sqlQuery"
                                value={sqlQuery}
                                variant="outlined"
                                style={{
                                    backgroundColor: 'lightgrey',
                                    borderRadius: '3px',
                                    alignItems: 'left',
                                    padding: '10px 10px 0px 10px',
                                    height: '70px',
                                    width: '100%',
                                    border: 'none'}}
                                onChange={this.handleChange}
                            />
                        </div>
                    </Grid>
                    <div style={{ padding: '30px 5px', height: '80px' }}>
                        <div style={{float: 'left', margin: '-40px 0px 0px 20px'}}>
                            {
                                this.state.errors.map((error, i) => {
                                    return (
                                        <p style={{color: 'red'}}>{error.text}</p>
                                    )
                                })
                            }
                        </div>
                    <Button
                            variant="outlined"
                            style={{ backgroundColor: '#666666', color: 'white', float: 'right' }}
                            onClick={this.handleValidate}
                        >
                            <span style={{ padding: '0 15px', fontWeight: 'bold', fontSize: '12px' }}>Validate</span>
                        </Button>
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