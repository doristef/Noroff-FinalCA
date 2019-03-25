import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import {
    Route,
    Switch,
    HashRouter
} from 'react-router-dom';

import './styles/app.scss';

import App from './components/app/app';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Homepage from './pages/homepage';
import CardSpecific from './pages/cardSpecific';

const routes = (
    <HashRouter>
        <Switch>
            <App>
                <Route path="/" exact component={Homepage} />
                <Route path="/cardspecific/:id" exact component={CardSpecific} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
            </App>
        </Switch>
    </HashRouter>
);

const outlet = document.getElementById('app')

const render = () => {
    ReactDOM.render(
        <AppContainer>
            {routes}
        </AppContainer>,
        outlet
    );
};

render();

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept(render);
}
