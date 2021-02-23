import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import proNail from '../views/logo/pronail-logo.png';
import turknet from '../views/logo/turknet-logo.png';
import studio from '../views/logo/kuafor-logo.jpg';
import leventLostra from '../views/logo/lostra-logo.png';
import vatan from '../views/logo/vatan-logo.svg';
import migros from '../views/logo/migros-logo.png';
import eczane from '../views/logo/eczane-logo.jpg';
import vivense from '../views/logo/vivense-logo.svg';
import avm from '../views/logo/avm-logo.png';

const ListCampaigns = ({ store, lang }) => {

    let src;

    if(store.name === 'Pro-Nail') src = proNail;
    else if(store.name === 'Turknet') src = turknet;
    else if(store.name === 'Studio Kuafor') src = studio;
    else if(store.name === 'Levent Lostra') src = leventLostra;
    else if(store.name === 'Vatan Computer') src = vatan;
    else if(store.name === 'Migros') src = migros;
    else if(store.name === 'Eczane') src = eczane;
    else if(store.name === 'Vivense') src = vivense;
    else if(store.name === 'general') src = avm;
    ;

    return (
        <ListItem style={{ marginTop: '20px' }}>
            <ListItemAvatar>
                <img src={src} alt='logo' style={{ width: '4.5vh', backgroundColor:'white' }}></img>
            </ListItemAvatar>
            <ListItemText primary={store.text[lang]} />
        </ListItem>
    );

}

export default ListCampaigns;