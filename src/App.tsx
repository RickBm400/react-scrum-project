// import { eraser_board } from './utils/testData';
// import { useEffect } from 'react';
// import Colums from './sharedComponens/Columns/index';
import { incremented } from './store/counter.state';
import { useAppDispatch, useAppSelector } from './store/hooks';
import './_global.sass';

function App() {
  const { counter } = useAppSelector((state) => state);
  const Dispatch = useAppDispatch();

  return (
    <main className='main__container'>
      <h3 className='title'></h3>
      <div id='dashboard__table'>{/* <Colums /> */}</div>
      <button onClick={() => Dispatch(incremented())}>incapie</button>
      {JSON.stringify(counter.value)}
    </main>
  );
}

export default App;

