import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { stores } from '../seed/seed';

const Search = (props) => {

    return (
        <div>
            <Autocomplete
                id="grouped-demo"
                options={stores}
                groupBy={(option) => option.floor}
                getOptionLabel={(option) => option.name}
                style={{ width: 300, margin: '20px', marginBottom: '0px' }}
                renderInput={(params) => <TextField {...params} label={props.lang === 'tr' ? "Kat Göre": 'By Floor'} variant="outlined" />}
                onChange={(event, value) => props.changeHandler(event, value)}
            />
        </div>
    )

}

export default Search;