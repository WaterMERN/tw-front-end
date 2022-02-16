import React from "react";

  const Totals = ({foodTotal, expenseTotal, lodgingTotal, otherTotal, transportationTotal}) => {
    return(
        <div className="totals-container">
          <h3 className="trip-cost-title">Trip Cost: </h3>
        <div className='create-totals-container'>
          <h5>Food: ${foodTotal} </h5>
          <h5>Transportation: ${transportationTotal}</h5>
          <h5>Lodging: ${lodgingTotal}</h5>
          <h5>Other: ${otherTotal}</h5>
          <h5>Total: ${expenseTotal}</h5>
        </div>
      </div>
    )
  }
  
  export default Totals