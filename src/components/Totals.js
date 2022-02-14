  //this needs state for each catgory total 
  // import '../../css/CreateTrip.css'

  const Totals = ({foodTotal, expenseTotal, lodgingTotal, otherTotal, transportationTotal}) => {


    return(
        <div>
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