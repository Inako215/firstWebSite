import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/bidpro.module.css";

import { useSelector } from "react-redux";
import { selectCount } from "../../redux/counterSlice";

const HomePage = () => {
  const count = useSelector(selectCount)
  
    return (
    <>
      <div className={`${styles.row} ${styles.value}`}>Counter: {count}</div>
      <div className={styles.row}>
        <button className={styles.button}>Add</button>
        &nbsp;
        <button className={styles.button}>Subtract</button>
      </div>
      <div>
        <div className="text-center mt-3">
          <Link to="/american-airlines/pilots" className={styles.button}>
            Pilots
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
