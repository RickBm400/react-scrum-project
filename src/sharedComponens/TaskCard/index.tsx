import { Inside } from '../../utils/testData';
import './taskCards.sass';
// import Icon from '@mdi/react';
// import { mdiArrowUpBoldCircle } from '@mdi/js';

export default function TaskCard(props: Inside) {
  return (
    <div className='task__card'>
      <div className='task__card-content'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className='task__card-actions'>
        <div className='tear' style={{ backgroundColor: `#D2956A` }} />
        <div className='tear' style={{ backgroundColor: `#a26ad2` }} />
      </div>
    </div>
  );
}

/* <Icon path={mdiArrowUpBoldCircle} size={1} /> */
/**
 * add title
 * add tags for task
 * add minimal description
 * add priority
 * add task duration
 * add dialog for open task
 *
 */

