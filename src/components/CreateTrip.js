import React from 'react';

export default function CreateTrip() {
  return (
    <div>
      <div>
        <div>Current Trip Test</div>
      </div>
      <form>
        <div className='add-item'>
          Food:
          <input name="food"></input>Cost:<input name="cost"></input><button>+</button>
        </div>
        <div className='add-item'>
          Lodging:
          <input name="food"></input>Cost:<input name="cost"></input><button>+</button>
        </div>
      </form>
    </div>
  )
}
