import './columns.sass';
import { Inside } from '../../utils/testData';
import TaskCard from '../TaskCard';

interface props {
  header: string;
  insides: Inside[];
}

export default function Columns({ header, insides = [] }: props) {
  return (
    <div className='columns__container'>
      <h3 className='columns__header'>{header}</h3>
      <div
        className='insides'
        style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
        {insides.map((inside: Inside, index) => (
          <TaskCard {...inside} key={index} />
        ))}
      </div>
    </div>
  );
}

