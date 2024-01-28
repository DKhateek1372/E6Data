import './App.css';
import Table from './table';
import data from './data';


function App() {
  return (
    <div className="App">
      <div className="childDiv">
        Inxeption
      </div>
      <div className="tableDiv">
        <div className="tablePosition">
        {
              Array.isArray(data) && data.length> 0  ? 
              data.map((table)=>
                <Table data={table}/>
              )
              : null
          }
        </div>
      </div>
    </div>
  );
}

export default App;
