import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Category } from './pages';

import ScrollToTop from './hooks/ScrollToTop';

const App = () => {
   return (
      <>
         <Router>
            <ScrollToTop>
               <Switch>
                  <Route path="/" exact>
                     <Home />
                  </Route>
                  <Route path="/brand/:id/:category">
                     <Category />
                  </Route>
               </Switch>
            </ScrollToTop>
         </Router>
      </>
   );
};

export default App;
