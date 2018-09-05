import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

let id = 0;
function createData(dateAndTime, location) {
    id += 1;
    return {
        id,
        dateAndTime,
        location,
    };
}

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = props => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: props.spacing.unit * 2,
        textAlign: "center",
        color: props.palette.text.secondary,
        alignItems: "center",
    },
    grid: {
        alignItems: "center",
    },
    AppBar: {
        backgroundColor: "cadetblue",
        color: "yellow",
    }
});

class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            orderNumber: "",
            orderDetails: [
                createData("Name", "Vybhav"),
                createData("Date Of Birth", "20/05/1995"),
                createData("Location", "YVPL"),
            ],
        };
    }
    
    render(){
        const {
            classes
        } = this.props;
        let {
            orderDetails,
        } = this.state;
        return(
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <AppBar position = "static" className = {classes.AppBar}
                        >
                            <Toolbar>
                                <Typography variant="title" color="inherit" className={classes.flex}>
                                    Profile
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <Paper className={classes.paper}>
                            <Table className={classes.table}>
                                {/* <TableHead>
                                    <TableRow>
                                        <CustomTableCell>Date and Time</CustomTableCell>
                                        <CustomTableCell numeric>Location Of the Courier</CustomTableCell>
                                        <CustomTableCell numeric>Estimation Time</CustomTableCell>
                                    </TableRow>
                                </TableHead> */}
                                <TableBody>
                                    {orderDetails.map(details => {
                                        return (
                                            < TableRow className = {classes.row} key = {details.id} >
                                                <CustomTableCell component="th" scope="row">
                                                    {
                                                        details.dateAndTime
                                                    }
                                                </CustomTableCell>
                                                <CustomTableCell numeric>
                                                    {
                                                        details.location
                                                    } 
                                                </CustomTableCell>
                                                < CustomTableCell numeric > 
                                                    {
                                                        details.estimationTime
                                                    } 
                                                </CustomTableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
};

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.string
};

export default withStyles(styles)(Profile);