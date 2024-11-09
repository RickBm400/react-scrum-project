import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { setInitialData } from '../store/features/taskcolums.state';
import taskBoard from '../utils/testData';
import Columns from '../sharedComponens/Columns';

export default function Dashboard() {
  const Dispatch = useAppDispatch();
  const taskGroup = useAppSelector((state) => state.taskGroup.value);
  // temporary
  const cardHold = useAppSelector((state) => state.cardHold);

  useEffect(() => {
    if (taskGroup.length == 0) {
      Dispatch(setInitialData(taskBoard));
    }
  }, [Dispatch, taskGroup]);

  return (
    <div id='dashboard__container'>
      <div id='dashboard__nav'>
        <span>Projects / Random Scrum</span>
        <h1>Dashboard</h1>
      </div>
      <div id='dashboard__table'>
        {taskGroup.map(({ HEADER, insides }, index) => (
          <Columns
            key={index}
            columnId={index}
            header={HEADER}
            insides={insides}
          />
        ))}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            right: '30px',
            color: 'white',
            fontSize: '1.7rem',
          }}
        >
          {JSON.stringify(cardHold)}
        </div>
      </div>
    </div>
  );
}
