
import classes from './Modal.module.css';

const ModalOverlay = (props) => {

  console.log("ModalOverlay :");
  console.log(props);

  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};


export default ModalOverlay;
