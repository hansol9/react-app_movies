import PropTypes from 'prop-types';
import styles from "./Button.module.css"; 

function Button({text}) {
  return <button className={styles.btn}>{text}</button>;   
  /*
  return (
    <button 
        style={{
            color: 'white',
            backgroundColor: 'blue',
        }}
    >
        {text}
    </button>
  );
  */ 
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;