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
      <div className='task__card-content'>
        <h3>Incidence 2</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo eos
          esse numquam deserunt itaque. Quae doloremque numquam quod, commodi.
        </p>
      </div>
      <div className='task__card-actions'>
        <div className='tear' style={{ backgroundColor: `#D2956A` }} />
        <div className='tear' style={{ backgroundColor: `#a26ad2` }} />
      </div>
    </div>
  );
}
/* <Icon path={mdiArrowUpBoldCircle} size={1} /> */

