  //this needs state for each catgory total 
  
  const Totals = ({foodTotal, lodgingTotal, otherTotal, transportationTotal}) => {


    return(
        <div>
        <div className='create-totals-container'>
          <h5>Food ----------------  {foodTotal} </h5>
          <h5>Transportation -----  {transportationTotal}</h5>
          <h5>Lodging------------- {lodgingTotal}</h5>
          <h5>Other -------------- {otherTotal}</h5>
          <h3>Total -------- $0.00</h3>
        </div>
      </div>


    )
  }
  
 export default Totals