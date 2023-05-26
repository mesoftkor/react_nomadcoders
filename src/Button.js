import PropTypes from "prop-types";
import styles from "./Button.module.css";
//반드시 미들네임을 module로 해야 함(modules로 하면 적용 안됨)
function Button({text}){
    return <button className={styles.btn}>{text}</button>;
}

Button.prototype = {
    text: PropTypes.string.isRequired,
};
export default Button