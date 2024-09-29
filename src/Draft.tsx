import React, { useEffect, useState, useRef } from 'react';
import './sass/draft.sass';

interface item {
  name: string;
}

interface coordinates {
  x: number;
  y: number;
}

const test: item[] = [
  {
    name: 'tarea1',
  },
  {
    name: 'tarea2',
  },
  {
    name: 'tarea3',
  },
];

export default function Draft() {
  const [position, setPosition] = useState<coordinates>({ x: 0, y: 0 });
  const [itemColums, setItemColums] = useState<item[]>(test);
  const columItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const phantomCard = useRef<HTMLDivElement | null>(null);

  const handlePosition = (event: MouseEvent) => {
    event.preventDefault();
    setPosition({ x: event.clientX, y: event.clientY });
  };

  function handleDragStart(
    event: React.DragEvent<HTMLDivElement>,
    index: number,
  ) {
    console.log('startDragg');
    // const itemOnDrag = itemColums[index];

    const card = event.currentTarget;
    const clone = card.cloneNode(true) as HTMLDivElement;

    clone.style.position = 'absolute';
    clone.style.top = '-1000px'; // Para que no aparezca en el viewport
    clone.style.pointerEvents = 'none';

    document.body.appendChild(clone);
    event.dataTransfer.setDragImage(clone, 0, 0);
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log('ola');
  };

  const handleDragEnd = () => {
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
      <div className='draft__column'>
        {itemColums.map((item, index) => (
          <div
            key={index}
            ref={(elem) => (columItemsRef.current[index] = elem)}
            id={`item-${index}`}
            draggable
            className='draft__column-item'
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnd={() => handleDragEnd()}
            onDragOver={handleDragOver}>
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
      <div className='mouse-coordinates'>{JSON.stringify(position)}</div>
    </section>
  );
}

