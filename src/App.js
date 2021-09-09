import LisitingPage from "./Pages/ListingPage/ListingPage";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <LisitingPage />
        </Provider>
      </header>
    </div>
  );
}

export default App;
