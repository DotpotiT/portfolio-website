import React, { useState, useRef, useEffect } from 'react';

function TeamMembers() {
  const [currentRow, setCurrentRow] = useState(0);
  const [currentColumn, setCurrentColumn] = useState(0);
  const slideshowRef = useRef(null);
  const isPaused = useRef(false);

  const rows = [
    ['One', 'Two', 'Three', 'Four'],
    ['Five', 'Six', 'Seven', 'Eight'],
    ['Nine', 'Ten'],
  ];

  const update = () => {
    if (!isPaused.current) {
      setCurrentColumn((prevColumn) => (prevColumn + 1) % rows[currentRow].length);

      if (currentColumn === 0) {
        // Move to the next row when the current row is completed
        setCurrentRow((prevRow) => (prevRow + 1) % rows.length);
      }
    }
  };

  const pause = () => {
    isPaused.current = true;
  };

  const play = () => {
    isPaused.current = false;
  };

  useEffect(() => {
    const intervalId = setInterval(update, 3000); // Change 3000 to your desired interval in milliseconds

    return () => {
      clearInterval(intervalId); // Cleanup on component unmount
    };
  }, [currentRow, currentColumn]);

  return (
    <div>
      {/* <div
        className="slideshow"
        ref={slideshowRef}
        onMouseEnter={pause}
        onMouseLeave={play}
        onFocus={pause}
        onBlur={play}
      >
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((slide, columnIndex) => (
              <div
                key={columnIndex}
                className={`slide ${
                  rowIndex === currentRow && columnIndex === currentColumn ? 'active' : ''
                }`}
              >
                {slide}
              </div>
            ))}
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default TeamMembers;
