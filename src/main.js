import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import {
    Route,
    Switch,
    HashRouter,
    Redirect
} from 'react-router-dom';

import './styles/app.scss';

import App from './components/app/app';
import About from './pages/about/about';
import Contact from './pages/contact';
import Homepage from './pages/homepage';''
import CardSpecific from './pages/cardSpecific';
import FormSuccess from './pages/formSuccess/thankYou'
import Login from './pages/login';
import NotFound from './pages/404/notFound';

const routes = (
    <HashRouter>

        <App>
            <Switch>
                <Route exact path="/" 
                render={() => 
                ( sessionStorage.getItem('AuthToken') ? <Route  component={Homepage} /> : (<Redirect to="/login" />)
                )}  />
                <Route exact path="/cardspecific/:id" 
                render={() => 
                ( sessionStorage.getItem('AuthToken') ? <Route component={CardSpecific} /> : (<Redirect to="/login" />)
                )} />
                <Route exact path="/about" 
                render={() => 
                ( sessionStorage.getItem('AuthToken') ? <Route component={About} /> : (<Redirect to="/login" />)
                )} />
                <Route exact path="/contact" 
                render={() => 
                ( sessionStorage.getItem('AuthToken') ? <Route component={Contact} /> : (<Redirect to="/login" />)
                )} />
                <Route exact path="/thankyou" 
                render={() => 
                ( sessionStorage.getItem('AuthToken') ? <Route component={FormSuccess} /> : (<Redirect to="/login" />)
                )} />
                <Route path="/login" component={Login}/>
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
