import React, { useState } from "react";
import styles from "../../css/bidpro.module.css";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { selectCount, incrementByAmount } from "../../redux/counterSlice";

const ASPilotsPage = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const [showError, setShowError] = useState(false);

  const validateNum = () => {
    if (incrementAmount < 1 || incrementAmount > 999) {
      setShowError(true);
    } else {
      setShowError(false);
      dispatch(incrementByAmount(Number(incrementAmount)))
    }
  };

  return (
    <>
      <h2 className={`${styles.row} ${styles.value}`}>Counter: {count}</h2>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(i) => setIncrementAmount(i.target.value)}
        />
        <button
          className={`${styles.amountButton}`}
          onClick={validateNum}
        >
          Add Amount
        </button>
        <div />
      </div>
      <div className="text-center mt-3">
        {showError && (
          <div className="col-auto">
              Please enter a number between 1 and 999.
          </div>
        )}
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default ASPilotsPage;
