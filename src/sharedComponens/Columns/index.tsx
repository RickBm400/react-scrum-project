import './columns.sass';
import { Inside } from '../../utils/testData';
import TaskCard from '../TaskCard';

interface props {
  HEADER: string;
  insides: Inside[];
}

export default function Columns({ HEADER, insides = [] }: props) {
  return (
    <div className='columns__container'>
      <h3 className='columns__header'>{HEADER}</h3>
      <div
        className='insides'
        style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}
      >
        {insides.map((inside: Inside) => (
          <TaskCard {...inside} />
        ))}
      </div>
    </div>
  );
}

