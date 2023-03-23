import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Poseidon Kútfúrás"/>
      <h1 className='app__header-h1'>Kútfúrás Kis Helyigénnyel</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}></p>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
