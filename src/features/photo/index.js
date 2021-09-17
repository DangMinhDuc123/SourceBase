import React from 'react';
import MainPage from './page/Main/index'
import AddPhoto from './page/Add/index'
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

const Photo = props => {
    const match = useRouteMatch();
    console.log(match)
    return (
        <Switch>
            <Route exact path={match.url} component={MainPage} />
            <Route path={`${match.url}/add`} component={AddPhoto} />
        </Switch>
    );
};

export default Photo;