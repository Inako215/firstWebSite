import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/bidpro.module.css";

import { useSelector, useDispatch } from "react-redux";
import { selectCount, increment, decrement } from "../../redux/counterSlice";

const HomePage = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <>
      <div className={`${styles.row} ${styles.value}`}>Counter: {count}</div>
      <div className={styles.row}>
        <button className={styles.button} onClick={() => dispatch(increment())}>
          Add
        </button>
        &nbsp;
        <button className={styles.button} onClick={() => dispatch(decrement())}>
          Subtract
        </button>
      </div>
      <div>
        <div className="text-center mt-3">
          <Link to="/american-airlines/pilots" className={styles.button}>
            American Airlines Pilots
          </Link>
        </div>
        <div className="text-center mt-3">
          <Link to="/alaska-airlines/pilots" className={styles.button}>
            Alaska Airlines Pilots
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
