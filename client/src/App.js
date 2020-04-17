import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import 'materialize-css'
import {useRoutes} from './routes'
import {useAuth} from "./hooks/aith.hook";

const App = () => {
    const routes = useRoutes(false)
    const {token, login, logout, userId} = useAuth()
    return (
        <Router>
            <div className='container'>
                {routes}
            </div>
        </Router>
    );
}

export default App;
