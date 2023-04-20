import React, { useState, useEffect } from "react";
import gallery2 from "../Images/gallery2.jpg";

const Events = ({ searchTerm, data }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const filteredResults = data.filter((item) =>{  
        console.log(item);
      return item.paintingName && item.paintingName.toLowerCase().includes(searchTerm.toLowerCase())
    });
    setResults(filteredResults);
  }, [searchTerm, data]);

  return (
    <div className="exhibition-slider">
      {results.map((painting) => (
        <div className="row exh-row" key={painting.id}>
          <div className="col-md-6 exhibitions">
            <img src={gallery2} alt="" />
          </div>
          <div className="col-md-6 exhibitions-details">
            <div className="exhibition-heading">{painting.paintingName}</div>
            <div className="exhibition-specifics">{painting.year}</div>
            <div className="details">{painting.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
