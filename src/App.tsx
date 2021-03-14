import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import DashPage from "./pages/DashPage";
import FormPage from "./pages/FormPage";

const App: any = () => {
  return (
    <Switch>
      <Route exact path="/">
        <FormPage />
      </Route>
      <Route path="/dash" component={DashPage} />
    </Switch>
  );
};

export default hot(App);
