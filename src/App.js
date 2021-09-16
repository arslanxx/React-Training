import { Provider } from "react-redux";
import "./App.css";
import UsersList from "./components/UsersList";
import store from "./store";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <UsersList />
        </Provider>
      </header>
    </div>
  );
}

export default App;
