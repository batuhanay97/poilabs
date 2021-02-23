import React, { useEffect, useState } from 'react';
import ListCampaigns from './ListCampaigns';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { stores, announcements } from '../seed/seed';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxHeight: '100%',
      backgroundColor: theme.palette.background.paper,
      overflow: 'auto'
    },
}));

const Campaigns = ({ floor, lang }) => {
    const [store, setStore] = useState([]);

    const classes = useStyles();

    useEffect(() => {

        let allData = stores.concat(announcements);
        if(floor !== 'FirstFloor' && floor !== 'SecondFloor') {

            let foundStore = allData.filter(str => str.name === floor);
            setStore(foundStore);

        } else setStore(allData);

    }, [floor, setStore]);

    return (
        <List className={classes.root}>
            {store.map((str, index) => (
                <div key={index}>
                    <ListCampaigns lang={lang} store={str} />
                    <Divider variant="inset" component="li" />
                </div>
            ))}
        </List>
    )

}

export default Campaigns;