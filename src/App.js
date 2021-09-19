import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./shared/header";
import { routes } from "./routes/routes";
import "./App.css";
import Footer from "./shared/footer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={JSON.stringify(route) + index}
                  exact
                  path={route.path}
                  component={route.Component}
                />
              );
            })}
            <Redirect to="" />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
