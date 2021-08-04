import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabShow from './TabShow';

import Animation from '../Animation/Animation';
import ChartBoard from '../ChartBoard/ChartBoard';


const TabPanel = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const a11yProps = (index) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  return (
    <div className={classes.root}>
      <Paper position="static" color="default" elevation={6}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Animation" {...a11yProps(0)} />
          <Tab label="Chart" {...a11yProps(1)} />
        </Tabs>
      </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabShow value={value} index={0} dir={theme.direction}>
          <Animation />
        </TabShow>
        <TabShow value={value} index={1} dir={theme.direction}>
          <ChartBoard />
        </TabShow>

      </SwipeableViews>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
    backgroundColor: theme.palette.background.paper,
    width: 800,
  },
}));


export default TabPanel
