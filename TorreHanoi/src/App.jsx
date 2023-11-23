import { useState } from 'react'
import './App.css'

function App() {
  const [towers, setTowers] = useState([6,0,0]);

  const [selectedTowerIndex, setSelectedTowerindex] = useState();

  function handleClickedTower(clikedToweridx){
    if (selectedTowerIndex !== undefined) {
      const newTowers = [...towers]
      newTowers[selectedTowerIndex]--;
      newTowers[clikedToweridx]++;
      setTowers(newTowers);
      setSelectedTowerindex(undefined);
    }else{
      setSelectedTowerindex(clikedToweridx);
    }
  }

  return(
    <div className="App">
      <div className="towers">
        {towers.map((towerHeight, towerIndex) => (
          <div
          onClick={() => handleClickedTower(towerIndex)}
          className={"tower " + (selectedTowerIndex === towerIndex ? "selected" : "")}
          key={towerIndex}>
            <div className="line"></div>
            <div className="dics">
              {[...new Array(towerHeight)].map((_, discIndex) => (
                // eslint-disable-next-line react/jsx-key
                <div
                key={discIndex}
                className="disk" style={{
                  width: `${discIndex * 10 + 10}px`,
                  }}>
                </div>
              ))}
            </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default App
