import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import Header from "./shared/header";
import { routes } from "./routes/routes";
import "./App.css";
import Footer from "./shared/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={JSON.stringify(route) + index}
                path={route.path}
                component={route.Component}
              />
            );
          })}
          <Redirect to="" />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
