import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import GlowSeoul from './Glowseoul/Glowseoul';
import Consulting from './Consulting/Consulting';
import Space from './Space/Space';

const Routes = () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/glowseoul" exact component={Home} />
            <Route path="/glowseoul_sub01" component={GlowSeoul} />
            <Route path="/glowseoul_sub02" component={Consulting} />
            <Route path="/glowseoul_sub03" component={Space} />
        </Switch>
    </Router>
)


export default Routes;