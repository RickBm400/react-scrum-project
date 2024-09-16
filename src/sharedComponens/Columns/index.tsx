import './columns.sass';
import TaskCard from '../TaskCard';

export default function Columns() {
  return (
    <div className='columns__container'>
      <h3 className='columns__header'>Tareas por hacer</h3>
      <div className='insides'>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
}
