// import { eraser_board } from './utils/testData';
// import { useEffect } from 'react';
// import Colums from './sharedComponens/Columns/index';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { useEffect } from 'react';
import { setInitialData } from './store/features/taskcolums.state';
import { task_board } from './utils/testData';
import Columns from './sharedComponens/Columns';
import './_global.sass';

function App() {
  const Dispatch = useAppDispatch();
  const { taskGroup } = useAppSelector((state) => state);

  useEffect(() => {
    if (taskGroup.value.length == 0) {
      Dispatch(setInitialData(task_board));
    }
  }, [Dispatch, taskGroup]);

  return (
    <div id='dashboard__table'>
      {taskGroup.value.map(({ HEADER, insides }) => (
        <Columns HEADER={HEADER} insides={insides} />
      ))}
    </div>
  );
}

export default App;

