import React from 'react';
import FirstFloor from '../views/FirstFloor.png';
import SecondFloor from '../views/SecondFloor.png';
import eczane from '../views/eczane.png';
import leventLostra from '../views/leventlostra.png';
import migros from '../views/migros.png';
import proNail from '../views/pronail.png';
import studio from '../views/studiokuafor.png';
import turknet from '../views/turknet.png';
import vatan from '../views/vatancomputer.png';
import vivense from '../views/vivense.png';

const Map = (props) => {

    let src;

    if(props.map === 'FirstFloor') src = FirstFloor;
    else if(props.map === 'SecondFloor') src = SecondFloor;
    else if(props.map === 'Pro-Nail') src = proNail;
    else if(props.map === 'Turknet') src = turknet;
    else if(props.map === 'Studio Kuafor') src = studio;
    else if(props.map === 'Levent Lostra') src = leventLostra;
    else if(props.map === 'Vatan Computer') src = vatan;
    else if(props.map === 'Migros') src = migros;
    else if(props.map === 'Eczane') src = eczane;
    else if(props.map === 'Vivense') src = vivense;

    return <img src={src} alt='map' className='col-sm-5 col-md-6 col-lg-8 Map' />;

};

export default Map;