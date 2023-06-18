/* eslint-disable react/prop-types */
import { GiTireIronCross } from "react-icons/gi";

import styles from "./DeatilsOverlay.module.css";
import { useHabitData } from "../../Context/Habit-context";
import EditOverlay from "../Edit Overlay/EditOverlay";
import { useState } from "react";

const DetailsOverlay = ({ closeCreateOverlayHandler }) => {
  const { habits } = useHabitData();
  const [showCreateOverlay, setShowCreateOverlay] = useState(false);

  const closeoverlay = () => {
    setShowCreateOverlay(false);
  };

  return (
    <>
      <div
        className={styles.model__overlay}
        onClick={() => closeCreateOverlayHandler()}
      ></div>
      <div className={styles.model__container}>
        <h1>Your Habits</h1>
        <div className={styles.details}>
          <h2>Add Your New habits Here</h2>
          <GiTireIronCross
            onClick={() => closeCreateOverlayHandler()}
            className={styles.close__icons}
          />
        </div>
        <div className={styles.habit__details__container}>
          <h2>Name: {habits?.seletedHabit?.Name}</h2>
          <h2>Repeat: {habits?.seletedHabit?.repeat}</h2>
          <h2>Goal: {habits?.seletedHabit?.goal}</h2>
          <h2>Time: {habits?.seletedHabit?.time}</h2>
          <h2>StartDate:{habits?.seletedHabit?.startDate}</h2>
          <h2>Description: {habits?.seletedHabit?.desc}</h2>
          <button onClick={() => setShowCreateOverlay(true)}>Edit</button>
        </div>
      </div>
      {showCreateOverlay && <EditOverlay closeoverlay={closeoverlay} />}
    </>
  );
};

export default DetailsOverlay;
