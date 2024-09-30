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
  ],
  [],
];

export default function Draft() {
  const [position, setPosition] = useState<coordinates>({ x: 0, y: 0 });
  const [itemColums, setItemColums] = useState<item[][]>(test);
  const [onDragIndex, setOndragIndex] = useState<number>(-1);
  const columItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  // const phantomCard = useRef<HTMLDivElement | null>(null);

  const handlePosition = (event: MouseEvent) => {
    event.preventDefault();
    setPosition({ x: event.clientX, y: event.clientY });
  };

  function handleDragStart(
    event: React.DragEvent<HTMLDivElement>,
    index: number,
  ) {
    console.log('startDragg');

    const card = event.currentTarget;
    const clone = card.cloneNode(true) as HTMLDivElement;
    clone.style.position = 'absolute';
    clone.style.width = '400px';
    clone.style.opacity = '1';
    clone.style.top = '-1000px';

    document.body.appendChild(clone);
    event.dataTransfer.setData('clone', clone.id);
    setOndragIndex(index);
  }

  // const handleDrop = (index: number) => {
  //   if (onDragIndex != null) {
  //     setItemColums((prevColumns) => {
  //       const updatedColumns = [...prevColumns];

  //       // Intercambiar los elementos de los índices `index` y `onDragIndex`
  //       const temp = updatedColumns[index];
  //       updatedColumns[index] = updatedColumns[onDragIndex];
  //       updatedColumns[onDragIndex] = temp;

  //       return updatedColumns;
  //     });
  //   }
  // };

  /**
   * Personalizar la acción de las demás cards
   */
  const cardDragOver = (event?: React.DragEvent<HTMLDivElement>) => {
    event?.preventDefault();
    console.log('pussy on card');
  };
  const columnDragOver = (event?: React.DragEvent<HTMLDivElement>) => {
    event?.preventDefault();
    console.log('pussy on column');
  };

  const handleColumnDrop = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('drop at column');
    console.log(event.currentTarget);
    const cop = [...itemColums];
    cop[1].push(cop[0][1]);
  };

  /**
   * Cuando se termina el drag event
   */
  const handleDragEnd = () => {
    setOndragIndex(-1);
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
      <div
        className='draft__column'
        onDrop={handleColumnDrop}
        onDragOver={columnDragOver}
      >
        {itemColums[0].map((item, index) => (
          <div
            draggable
            key={index}
            ref={(elem) => (columItemsRef.current[index] = elem)}
            id={`item-col0-${index}`}
            className='draft__column-item'
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={() => cardDragOver()}
            onDragEnd={() => handleDragEnd()}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div
        className='draft__column'
        onDrop={handleColumnDrop}
        onDragOver={columnDragOver}
      >
        {itemColums[1].map((item, index) => (
          <div
            draggable
            key={index}
            ref={(elem) => (columItemsRef.current[index] = elem)}
            id={`item-col1-${index}`}
            className='draft__column-item'
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={() => cardDragOver()}
            onDragEnd={() => handleDragEnd()}
          >
            {item.name}
          </div>
        ))}
      </div>
      {/* <div
          ref={phantomCard}
          style={{
            position: 'absolute',
            top: '-1000px',
            backgroundColor: 'green',
          }}>
          hell ya
        </div> */}
      <div className='mouse-coordinates'>
        {JSON.stringify(position) + '\n' + onDragIndex}
      </div>
    </section>
  );
}

