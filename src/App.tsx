import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import DashPage from "./pages/DashPage";
import FormPage from "./pages/FormPage";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./context/ScrollToTop";

const App: any = () => {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={FormPage} />
        <Route path="/kanas" component={DashPage} />
      </Switch>
    </>
  );
};

export default hot(App);
