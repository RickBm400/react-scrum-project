import './_global.sass';
// import { eraser_board } from './utils/testData';
// import { useState } from 'react';
import Colums from './sharedComponens/Columns/index';

function App() {
  return (
    <main className='main__container'>
      <h3 className='title'></h3>
      <div id='dashboard__table'>
        <Colums />
      </div>
    </main>
  );
}

export default App;
