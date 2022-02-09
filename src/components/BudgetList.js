import React from 'react'

function BudgetList() {

    
const handleClick = (event) => {
    event.preventDefault()
    console.log(event.target.value)
  }
    return (
        <div>
            <div>BudgetList</div>

            <div>
                <div for="exampleNumber">
                    Food
                </div>
                <input
                    id="exampleFood"
                    name="food"
                    placeholder="food item"
                    type="text"
                />
                <button onClick={handleClick} >Add</button>
            </div>
        </div>
    )
}

export default BudgetList