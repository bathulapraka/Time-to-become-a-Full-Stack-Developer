'use client';
import { useRouter } from 'next/navigation';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
function MeetupItem(props) {
  const router=useRouter();

  function showDetails(){
    router.push(`/meetupId/${props.id}`)
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetails}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
