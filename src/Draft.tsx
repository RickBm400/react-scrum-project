import React, { useEffect, useState, useRef } from 'react';
import './sass/draft.sass';

interface item {
  name: string;
}

interface coordinates {
  x: number;
  y: number;
}

const test: item[][] = [
  [
    {
      name: 'tarea1',
    },
    {
      name: 'tarea2',
    },
    {
      name: 'tarea3',
    },
    {
      name: 'tarea4',
    },
    {
      name: 'tarea5',
    },
    {
      name: 'tarea6',
    },
    {
      name: 'tarea7',
    },
  ],
  [],
];

export default function Draft() {
  const [position, setPosition] = useState<coordinates>({ x: 0, y: 0 });
  const [itemColums, setItemColums] = useState<item[][]>(test);
  const [onDragIndex, setOndragIndex] = useState<number[]>([0, 0]);
  const columItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  // const phantomCard = useRef<HTMLDivElement | null>(null);

  const handlePosition = (event: MouseEvent) => {
    event.preventDefault();
    setPosition({ x: event.clientX, y: event.clientY });
  };

  function handleDragStart(
    event: React.DragEvent<HTMLDivElement>,
    cardIndex: number[],
  ) {
    console.log('startDragg');

    const card = event.currentTarget;
    const clone = card.cloneNode(true) as HTMLDivElement;
    clone.style.position = 'absolute';
    clone.style.width = '400px';
    clone.style.opacity = '1';
    clone.style.top = '-1000px';

    document.body.appendChild(clone);
    // event.dataTransfer.setData('clone', clone.id);
    setOndragIndex(cardIndex);
  }

  /**
   * Personalizar la acción de las demás cards
   */
  const cardDragOver = (event?: React.DragEvent<HTMLDivElement>) => {
    event?.preventDefault();
  };
  const columnDragOver = (event?: React.DragEvent<HTMLDivElement>) => {
    event?.preventDefault();
  };

  /**
   * Handle column drop element
   * @param index // receibe column index and return updated columns with cards
   */
  const handleColumnDrop = (index: number) => {
    console.log('drop at column');
    const [columnIndex, elementIndex] = onDragIndex;
    const cop = [...itemColums];
    cop[index].push(cop[columnIndex][elementIndex]);
    cop[columnIndex].splice(elementIndex, 1);
  };

  /**
   * Handle card drop
   * // use this when instead of drop element on column, drops on another card element
   * @param cardPositionIndex
   * @type {number[]}
   */
  const handleCardDrop = (
    event: React.DragEvent<HTMLDivElement>,
    [columnIndex, elementIndex]: number[],
  ) => {
    event.preventDefault();
    event.stopPropagation();

    const cop = [...itemColums];
    const [sourceColumn, sourceIndex] = onDragIndex;
    const newInsertion = cop[sourceColumn][sourceIndex];
    cop[sourceColumn].splice(sourceIndex, 1);
    cop[columnIndex].splice(elementIndex, 0, newInsertion);
    console.log('pusi drop cards');
  };

  /**
   * reset values to default on drag end trigger
   */
  const handleDragEnd = () => {
    setOndragIndex([0, 0]);
    console.log('endDraggun');
  };

  useEffect(() => {
    document.addEventListener('mousemove', handlePosition);
    return () => {
      document.removeEventListener('mousemove', handlePosition);
    };
  }, []);

  return (
    <section id='draft__container'>
      {itemColums.map((column, columnIndex) => (
        <div
          className='draft__column'
          key={columnIndex}
          onDrop={() => handleColumnDrop(columnIndex)}
          onDragOver={columnDragOver}
        >
          {column.map((item, index) => (
            <div
              draggable
              key={index}
              ref={(elem) => (columItemsRef.current[index] = elem)}
              id={`item-col0-${index}`}
              className='draft__column-item'
              onDragStart={(e) => handleDragStart(e, [columnIndex, index])}
              onDragOver={() => cardDragOver()}
              onDragEnd={() => handleDragEnd()}
              onDrop={(e) => handleCardDrop(e, [columnIndex, index])}
            >
              {item.name}
            </div>
          ))}
        </div>
      ))}
      <div className='mouse-coordinates'>
        {JSON.stringify(position) + '\n' + onDragIndex}
      </div>
    </section>
  );
}

