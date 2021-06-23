

import React from "react";


import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import  Form from '../Components/form'
import  Nfts from '../Components/nfts'


const routes = [
  {
    path: "/nfts",
    component: Nfts,
  },
  {
    path: "/eth",
    component: Form,
  },
];

const redirectRoute = "/nfts";

const Routes = () => {
  return (
    <BrowserRouter>
      
      <div className={'transitionEase'}>
        <Switch>
          {routes.map((_route) => (
            <Route {..._route} key={_route.path} />
          ))}

          <Route exact component={() => <Redirect to={redirectRoute} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
