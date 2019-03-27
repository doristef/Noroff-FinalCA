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
import About from './pages/about/about';
import Contact from './pages/contact';
import Homepage from './pages/homepage';''
import CardSpecific from './pages/cardSpecific';
import FormSuccess from './pages/formSuccess/thankYou'
import NotFound from './pages/404/notFound';

const routes = (
    <HashRouter>

        <App>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/cardspecific/:id" component={CardSpecific} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/thankyou" component={FormSuccess} />
                <Route path="*" component={NotFound}/>
            </Switch>
        </App>
        
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
