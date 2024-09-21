import './columns.sass';
import TaskCard from '../TaskCard';

interface props {
  HEADER: string;
  insides: object[];
}

export default function Columns({ HEADER, insides }: props) {
  return (
    <div className='columns__container'>
      <h3 className='columns__header'>{HEADER}</h3>
      <div className='insides'>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
}

