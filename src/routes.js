import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'

import home from './components/home/home';
import Page1 from './components/Page1/Page1';
import Page2 from './components/page2/page2';
import Page3 from './components/page3/page3';

export default (
  <Switch> 
    <Route path="/page1" component={Page1} />
    <Route path="/page2" component={Page2} />  
    <Route path="/page3" component={Page3} />          
    <Route path="/" component={home} />    
  </Switch>
);
