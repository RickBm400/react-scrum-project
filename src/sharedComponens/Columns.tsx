import { Inside } from '../utils/testData';
import TaskCard from './TaskCard.tsx';
import '@sass/folders/columns.sass';

interface props {
  header: string;
  insides: Inside[];
  columnId: number;
}

export default function Columns({ header, insides = [], columnId }: props) {
  return (
    <div id={`column-${columnId}`} className='columns__container'>
      <h3 className='columns__header'>{header}</h3>
      <div
        className='insides'
        style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}
      >
        {insides.map((inside: Inside, index) => (
          <TaskCard
            {...inside}
            key={index}
            cardId={index}
            columnId={columnId}
          />
        ))}
      </div>
    </div>
  );
}
