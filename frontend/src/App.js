import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import Index from "./components/Index/Index";
import ArticlePage from "./components/ArticlePage/ArticlePage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollToTop>
          <Switch>
            <Route component={Welcome} exact path="/welcome" />
            <Route component={Index} exact path="/" />
            <Route component={ArticlePage} exact path="/article/:articleId" />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
