import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    
<div className="demo-big-content">
    <Layout>
        <Header class="header-color" title="Mon Porfolio" scroll>
            <Navigation>
                <Link to="/resume">Moi</Link>
                <Link to="/projects">Mes Projets</Link>
                <Link to="/aboutMe">A Propos</Link>
                <Link to="/contact">Contact moi!</Link>
            </Navigation>
        </Header>
        <Drawer title="Mon Porfolio">
            <Navigation>
            <Link to="/resume">Moi</Link>
                <Link to="/projects">Mes Projets</Link>
                <Link to="/aboutMe">A Propos</Link>
                <Link to="/contact">Contact moi!</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>

  );
}

export default App;
