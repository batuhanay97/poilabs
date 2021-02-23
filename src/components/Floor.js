import React from 'react';
import Button from '@material-ui/core/Button';

const Floor = (props) => {

    return (
        <div className='FloorButtons'>
            <Button onClick={() => props.clickHandler('FirstFloor')} variant="contained" color="primary" >{props.lang === 'tr' ? '1.Kat' : '1.Floor'}</Button>
            <Button onClick={() => props.clickHandler('SecondFloor')} variant="contained" color="primary" style={{ marginLeft: '5px' }} >{props.lang === 'tr' ? '2.Kat' : '2.Floor'}</Button>
        </div>
    )

};

export default Floor;