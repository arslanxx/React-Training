import "./App.css";
import UsersList from "./UsersList/UsersList";
import store from "./redux/store";
import { Provider } from "react-redux";
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
