import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home_76 from "./pages/Home_76";
import About_76 from "./pages/About_76";
import SingleCocktail_76 from "./pages/SingleCocktail_76";
import Error_76 from "./pages/Error_76";
// import components
import Navbar_76 from "./components/Navbar_76";
function App_76() {
    return (
        <Router>
            <Navbar_76 />

            <Switch>
                <Route exact path='/'>
                    <Home_76 />
                </Route>
                <Route path='/about'>
                    <About_76 />
                </Route>
                <Route path='/cocktail/:id'>
                    <SingleCocktail_76 />
                </Route>
                <Route path='*'>
                    <Error_76 />
                </Route>
            </Switch>
        </Router>
    );
}

export default App_76;
