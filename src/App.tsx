// import { eraser_board } from './utils/testData';
// import { useEffect } from 'react';
// import Colums from './sharedComponens/Columns/index';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { useEffect } from 'react';
import { setInitialData } from './store/features/taskcolums.state';
import taskBoard from './utils/testData';
import Columns from './sharedComponens/Columns';
import '@sass/_global.sass';

function App() {
  const Dispatch = useAppDispatch();
  const { taskGroup } = useAppSelector((state) => state);

  useEffect(() => {
    if (taskGroup.value.length == 0) {
      Dispatch(setInitialData(taskBoard));
    }
  }, [Dispatch, taskGroup]);

  return (
    <div id='dashboard__table'>
      {taskGroup.value.map(({ header, insides }, index) => (
        <Columns key={index} header={header} insides={insides} />
      ))}
    </div>
  );
}

export default App;
