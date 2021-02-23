import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import turkey from '../views/logo/turkey.png';
import eng from '../views/logo/united-kingdom.png';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormLabel from '@material-ui/core/FormLabel';
import MapIcon from '@material-ui/icons/Map';
import StreetviewIcon from '@material-ui/icons/Streetview';

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
    })((props) => (
      <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        {...props}
      />
      ));

const useStyles = makeStyles((theme) => ({
    toggleContainer: {
      margin: theme.spacing(2, 0),
      width: '40%'
    },
}));

const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.common.white,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

const Settings = ({ changeHandler, lang }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [alignment, setAlignment] = React.useState('tr');
  const [mode, setMod] = React.useState('normal');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      changeHandler(newAlignment)
    }
  };

  const handleMod = (event, newMod) => {
    if (newMod !== null) {
        setMod(newMod);
    }
  };

  const classes = useStyles();

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Ayarlar
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ width: '50%' }}
      >
        <StyledMenuItem className='cal-sm-3' >
            <Grid container item sm={12} md={6}>
                <div className={classes.toggleContainer}>
                <FormLabel className='SettingLabel'>{lang === 'tr' ? 'Dil Seçeneği:' : 'Language Options: '}</FormLabel>
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton value="tr" aria-label="left aligned">
                        <img src={turkey} alt='turkey' style={{ width: '3vh' }} />
                    </ToggleButton>
                    <ToggleButton value="en" aria-label="centered">
                        <img src={eng} alt='eng' style={{ width: '3vh' }} />
                    </ToggleButton>
                </ToggleButtonGroup>
                </div>
            </Grid>
        </StyledMenuItem>
        <StyledMenuItem >
            <Grid container item sm={12} md={6}>
                <div className={classes.toggleContainer}>
                <FormLabel className='SettingLabel'>{lang === 'tr' ? 'Yönlendirme Modu:' : 'Routing Mod: '}</FormLabel>
                <ToggleButtonGroup
                    value={mode}
                    exclusive
                    onChange={handleMod}
                    aria-label="text alignment"
                >
                    <ToggleButton value="normal" aria-label="left aligned">
                        <MapIcon />
                    </ToggleButton>
                    <ToggleButton value="visually" aria-label="centered">
                        <StreetviewIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
                </div>
            </Grid>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

export default Settings;