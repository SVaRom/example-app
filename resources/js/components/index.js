import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Switch,Route,Link, BrowserRouter} from 'react-router-dom'
import Example from './Example'
import Hola from './hola'
import Student from './Student'
import Ejemplillo from './Ejemplillo';
import Cards from './Cards';
import about from './about';
import login from './login';
import change from './change';
ReactDOM.render (
(
    <BrowserRouter>
        <Router>
            <Switch>
                <Route exact path="/example-app/public/" component={Example}/>
                <Route exact path='/example-app/public/cards' component= {Cards} />
                <Route exact path='/example-app/public/student' component={Student} />
                <Route exact path='/example-app/public/ejemplillo' component={Ejemplillo} />
                <Route exact path='/example-app/public/about' component={about} />
                <Route exact path='/example-app/public/login' component={login} />
                <Route exact path='/example-app/public/change' component={change} />
                <Route exact path="/example-app/public/hola" component={Hola}/>
            </Switch>
        </Router>
    </BrowserRouter>
), document.getElementById('app'));
