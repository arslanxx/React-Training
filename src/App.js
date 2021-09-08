import "./App.css";
import AxiosList from "./Axios/AxiosList";
import FetchList from "./Fetch/FetchList";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AxiosList />
        <FetchList />
      </header>
    </div>
  );
}

export default App;
