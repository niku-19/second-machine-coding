import HabitsCard from "../../Components/Habits Card/HabitsCard";
import { useHabitData } from "../../Context/Habit-context";
import { NavLink } from "react-router-dom";
import styles from "./Archive.module.css";
import DetailsOverlay from "../../Components/details overlay/DetailsOverlay";
import { useState } from "react";

const Archive = () => {
  const { habits } = useHabitData();
  const [showDetailsOverlay, setShowDetailsOverlay] = useState(false);

  const showDetailsOverlayHandler = () => {
    setShowDetailsOverlay(true);
  };
  const closeCreateOverlayHandler = () => {
    setShowDetailsOverlay(false);
  };
  return (
    <div className="container">
      <h1>Habits Recoder</h1>
      <p>Track your habits. Build your life.</p>
      <NavLink to={"/"}>
        <button>show All</button>
      </NavLink>
      <div className={styles.grid__container}>
        {habits?.archive.map((habit) => (
          <HabitsCard
            key={habit.id}
            showDetailsOverlayHandler={showDetailsOverlayHandler}
            habit={habit}
          />
        ))}
      </div>
      {showDetailsOverlay && (
        <DetailsOverlay closeCreateOverlayHandler={closeCreateOverlayHandler} />
      )}
    </div>
  );
};

export default Archive;
