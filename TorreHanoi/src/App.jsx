import { useState } from 'react';
import './App.css';

function App() {
  const [towers, setTowers] = useState([[5,4,3,2,1],[],[]]);
  const [selectedTowerIndex, setSelectedTowerIndex] = useState();

  function handleClickedTower(clickedTowerIdx) {
    if (selectedTowerIndex !== undefined) {
      const newTowers = [...towers];
      const poppedDisc = newTowers[selectedTowerIndex].pop();

      if (newTowers[clickedTowerIdx].length === 0 || newTowers[clickedTowerIdx][newTowers[clickedTowerIdx].length - 1] > poppedDisc) {
        newTowers[clickedTowerIdx].push(poppedDisc);
        setTowers(newTowers);
      }
      setSelectedTowerIndex(undefined);
    } else {
      setSelectedTowerIndex(clickedTowerIdx);
    }
  }

  return (
    <div className="App">
      <div className="towers">
        {towers.map((discs, towerIndex) => {
          const reversedDiscs = discs.slice().reverse();
          return (
            <div
              onClick={() => handleClickedTower(towerIndex)}
              className={"tower " + (selectedTowerIndex === towerIndex ? "selected" : "")}
              key={towerIndex}
            >
              <div className="line"></div>
              <div className="dics">
                {reversedDiscs.map((discNumber, index) => (
                  <div
                    key={index}
                    className="disk"
                    style={{ width: `${discNumber * 15 + 15}px` }}
                  ></div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
