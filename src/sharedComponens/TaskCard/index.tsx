import './taskCards.sass';
import Icon from '@mdi/react';
import { mdiArrowUpBoldCircle } from '@mdi/js';
/**
 * add title
 * add tags for task
 * add minimal description
 * add priority
 * add task duration
 * add dialog for open task
 *
 */

export default function TaskCard() {
  return (
    <div className='task__card'>
      <h3 className='task__card-header'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h3>
      <div className='task__card-actions'>
        <span className='tag'>Easy</span>
        <div className='priority'>
          <Icon path={mdiArrowUpBoldCircle} size={1} />
          <span className='priority-span'>High</span>
        </div>
      </div>
      {/* <p className='task__card-description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ex
        dolorum incidunt tempore possimus? Doloribus earum tempore obcaecati
        rem? Nulla, voluptatibus. Expedita ullam quam voluptatem blanditiis
        explicabo dignissimos deleniti. Assumenda!
      </p> */}
    </div>
  );
}
