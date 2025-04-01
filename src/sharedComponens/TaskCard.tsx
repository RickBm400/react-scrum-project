import { Inside, category } from '../utils/testData';
import Icon from '@mdi/react';
// import { mdiArrowUpBoldCircle } from '@mdi/js';
import { mdiArrowUpBoldBox } from '@mdi/js';
import { mdiArrowDownBoldBox } from '@mdi/js';
import { mdiMinusBox } from '@mdi/js';
import React, { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setCardState, resetCardState } from '../store/features/cardHold.state';

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
  const Dispatch = useAppDispatch();
  const cardHold = useAppSelector((state) => state.cardHold);
  // const cardHold = useAppSelector((state) => state.cardHold);
  /**
   * handle drag event of current card
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
    Dispatch(setCardState({ column: columnId, row: cardId }));

    document.body.appendChild(cardClone);
  }

  function handleCardDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
    console.log(cardHold);
  }

  function handleDragEnd() {
    Dispatch(resetCardState());
  }

  return (
    <div
      id={`column-${columnId}-card-${cardId}`}
      className='task__card'
      draggable
      onDragStart={handleDragStrart}
      onDragEnd={handleDragEnd}
      onDrop={(e) => handleCardDrop(e)}
    >
      <div className='task__card-content'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className='task__card-actions'>
        <div className='task__card-actions-badges'>
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
