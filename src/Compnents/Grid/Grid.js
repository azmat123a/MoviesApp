import React, { useState, useEffect } from 'react';
import './../../CSS/Grid.css'

const Grid = () => {

  const [rowsLen, setRowsLen] = useState(5);
  const [colsLen, setColsLen] = useState(5);
  const [bgColors, setBgColors] = useState([]);

  // update bgColors whenever rowsLen or colsLen changes
  useEffect(() => {
    const newBgColors = Array(rowsLen * colsLen).fill('blue');
    if (bgColors.length <= newBgColors.length || bgColors.length >= newBgColors.length) {
      newBgColors.forEach((color, index) => {
        if (bgColors[index]) {
          newBgColors[index] = bgColors[index];
        }
      });
    }
    setBgColors(newBgColors);
  }, [rowsLen, colsLen, bgColors]);

  const gridItems = [];
  const clickHandler = (itm) => {
    const index = itm - 1;
    const newBgColors = [...bgColors];
    // newBgColors[index] = newBgColors[index] = 'white'
    newBgColors[index] = newBgColors[index] === 'blue' ? 'Red' : 'blue';
    setBgColors(newBgColors);
  };

  for (let rowIndex = 0; rowIndex < rowsLen; rowIndex++) {
    const row = [];
    for (let colIndex = 0; colIndex < colsLen; colIndex++) {
      const itemNumber = rowIndex * colsLen + colIndex + 1;
      row.push(
        <div
          key={`${rowIndex}-${colIndex}`}
          className="grid-item"
          onClick={() => {
            clickHandler(itemNumber);
          }}
          style={{
            background: bgColors[rowIndex * colsLen + colIndex],
            width: '5em',
            height: '5em',
            margin: '5px',
            borderRadius: '1em'
          }}
        >
          {itemNumber}
        </div>
      );
    }
    gridItems.push(
      <div
        key={rowIndex}
        className="grid-item-rows"
      >
        {row}
      </div>
    );
  }

  return (
    // Main Conatiner
    <div className='container-fluid '>
      {/* input section start*/}
      <div className='container-fluid inputs-section'>
        <div className="mb-3">
          <h1 className='mb-3 mt-3 fw-bold '>Grid Dimensions</h1>
          <div className="input-group">
            <span className="input-group-text bg-dark text-white border-dark" id="basic-addon3">Enter grid rows</span>
            <input className="form-control border-dark " aria-describedby="basic-addon3"
              min={1}
              type="number"
              id="rows"
              value={rowsLen}
              onChange={(event) => setRowsLen(Number(event.target.value))}
            />
          </div>
          <div className="input-group d-flex">
            <span className="input-group-text bg-dark text-white border-dark" id="basic-addon3">Enter grid columns</span>
            <input className="form-control border-dark oka" aria-describedby="basic-addon3"
              min={1}
              type="number"
              id="cols"
              value={colsLen}
              onChange={(event) => setColsLen(Number(event.target.value))}
            />
          </div>
        </div>
      </div>
      {/* input section end */}
      <br />
      {/* Grid section start */}
      <div className='grid'>
        <div>
          {gridItems}</div>
      </div>
    </div>
  );
};

export default Grid;
