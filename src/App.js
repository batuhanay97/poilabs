import React, { useEffect, useState } from 'react';
import Map from './components/Map';
import Floor from './components/Floor';
import Search from './components/Search';
import Campaigns from './components/Campaigns';
import { stores } from './seed/seed';
import Settings from './components/Settings';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Card from '@material-ui/core/Card';
import Slide from '@material-ui/core/Slide';
import './assets/App.css';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const App = () =>  {

  const [floor, setFloor] = useState('FirstFloor');
  const [language, setLanguage] = useState('tr');

  const onClickHandler = (data) => {

    setFloor(data);

  }

  const onChangeLangHandler = (event) => {

    setLanguage(event);

  }

  const onChangeHandler = (event, value) => {

    if(value) setFloor(value.name);
    else {
      const store = stores.find(store => store.name === floor);
      if(!store) setFloor('FirstFloor');
      else if (store.floor === 2) setFloor('SecondFloor');
      else if (store.floor === 1) setFloor('FirstFloor');
    }

  }

  return (
    <div className='App'>
      <React.Fragment>
      <CssBaseline />
        <HideOnScroll>
          <AppBar>
            <Toolbar className='TopBar'>
              <Settings changeHandler={onChangeLangHandler} lang={language} />
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        <div className='AppContainer'>
          <div className='row AppContainer'>
            <Card className='col-xl-5 AppCard'>
              <Toolbar className='CardTopBar'>
                {language === 'tr' ? 'Kat Planı' : 'Floor Plan'}
              </Toolbar>
              <Search lang={language} changeHandler={onChangeHandler}/>
              <Floor lang={language} clickHandler={onClickHandler} />
              <Map map={floor} />
            </Card>
            <Card className='col-xl-5 AppCard'>
              <Toolbar className='CardTopBar'>
                {language === 'tr' ? 'Duyurular ve Kampanyalar' : 'Announcements and Campaigns'}
              </Toolbar>
              <Campaigns lang={language} floor={floor} />
            </Card>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
