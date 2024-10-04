import { Inside, category } from '../utils/testData';
import '@sass/folders/taskCards.sass';
import Icon from '@mdi/react';
// import { mdiArrowUpBoldCircle } from '@mdi/js';
import { mdiArrowUpBoldBox } from '@mdi/js';
import { mdiArrowDownBoldBox } from '@mdi/js';
import { mdiMinusBox } from '@mdi/js';
import { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const badge_colors: Record<category, string> = {
  FRONT_END: '#D2956A',
  BACK_END: '#e1576d',
  CI_CD: '#a26ad2',
  DOCUMENTATION: '#5fb2d5',
  DESIGN: '#87c884',
};

interface cardTypes extends Inside {
  cardId: number;
  columnId: number;
}

type priority = Pick<Inside, 'priority'>['priority'];

function getIcon(priority: priority): ReactNode {
  const iconList: Record<string, string> = {
    HIGH: mdiArrowUpBoldBox,
    MEDIUM: mdiMinusBox,
    LOW: mdiArrowDownBoldBox,
  };
  return <Icon className='priority-icon' path={iconList[priority]} size={1} />;
}

export default function TaskCard({
  title,
  cardId,
  columnId,
  description,
  category,
  priority,
}: cardTypes) {
  // const Dispatch = useAppDispatch();
  const { cardHold } = useAppSelector((state) => state);
  /**
   * handle drag even of current card
   * @param event get current node info
   */
  function handleDragStrart(event: React.DragEvent<HTMLDivElement>) {
    ///
    console.log('cardDrag');
    const card = event.currentTarget;
    const cardClone = card.cloneNode(true) as HTMLDivElement;
    cardClone.style.position = 'absolute';
    cardClone.style.width = '400px';
    cardClone.style.opacity = '1';
    cardClone.style.top = '-1000px';

    document.body.appendChild(cardClone);
  }

  return (
    <div
      id={`column-${columnId}-card-${cardId}`}
      className='task__card'
      draggable
      onDragStart={handleDragStrart}
    >
      {/* onDragStart={}
      onDragOver={}
      onDrop={}
      onDragEnd={} */}
      <div className='task__card-content'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className='task__card-actions'>
        <div className='task__card-actions-badges'>
          {JSON.stringify(cardHold)}
          {category.map((badge, index) => (
            <div
              className='badge'
              style={{ backgroundColor: badge_colors[badge] }}
              key={index}
            />
          ))}
        </div>
        {getIcon(priority)}
      </div>
    </div>
  );
}

/**
 * add title
 * add tags for task
 * add minimal description
 * add priority
 * add task duration
 * add dialog for open task
 *
 */
