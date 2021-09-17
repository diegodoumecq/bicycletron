import { BrowserRouter, Route, Switch } from 'react-router-dom';

import WelcomeScreen from '../screens/Welcome';
import BrandsScreen from '../screens/Brands';
import BrandBicyclesScreen from '../screens/BrandBicycles';
import AllBicyclesScreen from '../screens/AllBicycles';
import My404Screen from '../screens/My404';

import { Routes } from './routes';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', Routes.HOME]}>
          <WelcomeScreen />
        </Route>
        <Route exact path={Routes.BRANDS}>
          <BrandsScreen />
        </Route>
        <Route exact path={Routes.BRAND_BIKES}>
          <BrandBicyclesScreen />
        </Route>
        <Route exact path={Routes.ALL_BIKES}>
          <AllBicyclesScreen />
        </Route>
        <Route exact path="*">
          <My404Screen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
