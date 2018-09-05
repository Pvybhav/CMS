import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import SvgIcon from "@material-ui/core/SvgIcon";

import Home from "./Home";
import SignUp from "./SignUp";
import TrackCourierStatus from "./TrackCourierStatus";
import UserProfile from "./UserProfile";
import Settings from "./Settings";

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}
function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: theme.palette.background.paper,
    },
});

class ScrollableTabsButtonPrevent extends React.Component {
  state = {
      value: 0,
  };

  handleChange = (event, value) => {
      this.setState({ value });
  };

  render() {
      const { classes } = this.props;
      const { value } = this.state;

      return (
          <div className={classes.root}>
              <AppBar position="static">
                  
                  <Tabs value={value} onChange={this.handleChange} scrollable scrollButtons="on">
                      {/* Profile */}
                      <Tab icon={<HomeIcon />} />
                      {/* <Tab label="Facebook" component={Settings} to="/settings" /> */}
                      {/* Home Icon */}
                      <Tab icon={<HomeIcon
                          className={classes.icon}
                          color="primary"
                          style={{ fontSize: 36 }}
                          component={svgProps => (
                              <svg {...svgProps}>
                                  <defs>
                                      <linearGradient id="gradient1">
                                          <stop offset="30%" stopColor={blue[400]} />
                                          <stop offset="70%" stopColor={red[400]} />
                                      </linearGradient>
                                  </defs>
                                  {React.cloneElement(svgProps.children[0], { fill: "url(#gradient1)" })}
                              </svg>
                          )}
                      />} />

                     
                      <Tab icon={
                          <i className="material-icons">
                            local_shipping
                          </i>
                      } />

                      <Tab icon={
                          <i className="material-icons">
                              settings
                              {/* account_circle */}
                          </i>
                      } />
                      
                  </Tabs>
              </AppBar>
              {value === 0 && <TabContainer><SignUp /></TabContainer>}
              {value === 1 && <TabContainer><Home /></TabContainer>}
              {value === 2 && <TabContainer><TrackCourierStatus /></TabContainer>}
              {value === 3 && <TabContainer><Settings /></TabContainer>}
          </div>
      );
  }
}

ScrollableTabsButtonPrevent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonPrevent);
