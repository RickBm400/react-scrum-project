import React from 'react';
import { Inside } from '../utils/testData';
import TaskCard from './TaskCard.tsx';
import { useAppDispatch, useAppSelector } from '../store/hooks.ts';
import {
  addTaskToColumn,
  deleteTaskFromColumn,
} from '../store/features/taskcolums.state.ts';
import '@sass/folders/columns.sass';

interface props {
  header: string;
  insides: Inside[];
  columnId: number;
}

export default function Columns({ header, insides = [], columnId }: props) {
  const Dispatch = useAppDispatch();
  const cardHold = useAppSelector((state) => state.cardHold);
  const taskGroup = useAppSelector((state) => state.taskGroup.value);

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function handleCardDropInColumn(columnId: number) {
    const { column, row } = cardHold;
    Dispatch(
      addTaskToColumn({
        column: columnId,
        row: taskGroup[columnId].insides.length,
        inside: taskGroup[column].insides[row],
      }),
    );
    Dispatch(
      deleteTaskFromColumn({
        column: column,
        row: row,
      }),
    );
  }

  return (
    <div
      id={`column-${columnId}`}
      className='columns__container'
      onDragOver={handleDragOver}
      onDrop={() => handleCardDropInColumn(columnId)}
    >
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
