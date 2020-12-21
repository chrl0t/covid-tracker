import "./App.css";
import DataCards from "./components/DataCards";
import CountriesList from "./components/CountriesList";

function App() {
  return (
    <div className='container'>
      <DataCards />
      <CountriesList />
    </div>
  );
}

export default App;
