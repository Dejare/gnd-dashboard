import "./App.scss";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rightside from "./components/Rightside";
import Center from "./components/Center";
import Leftside from "./components/Leftside";
import Saving from "./components/savings/Saving";
import Error from "./Error";
import Card from "./components/cards/Card";
import { Counter } from "./components/COunter";

function App() {
    return (
        <Router>
            {/* <Home/> */}
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/savings">
                    <Saving />
                </Route>
                <Route path="/cards" exact>
                    <Card />
                </Route>
                <Route exact path="/testt">
                    <Counter />
                </Route>
                <Route path="*">
                    <   Error />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
