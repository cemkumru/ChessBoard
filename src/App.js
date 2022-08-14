import './App.css';

function App() {
  return (
    <div className="App">
        <div className="board">
        {
          [1,2,3,4,5,6,7,8].map((r)=>(
            <div className="row" key={r}>{
              [1,2,3,4,5,6,7,8].map((s)=>(
                <div className="square" key={s}>
                </div>
              ))
            }

            </div>
          ))
        }

        </div>

    </div>
  );
}

export default App;
