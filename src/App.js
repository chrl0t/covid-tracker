import "./App.css";
import DataCards from "./components/DataCards";
import CountriesList from "./components/CountriesList";
import Chart from "./components/Chart";

function App() {
  return (
    <div className='container'>
      <DataCards />
      <CountriesList />
      <Chart />
    </div>
  );
}

export default App;
