import { useState } from "react";
import HabitsCard from "../../Components/Habits Card/HabitsCard";
import { useHabitData } from "../../Context/Habit-context";

import styles from "./LandingPage.module.css";
import CreateOverlay from "../../Components/Create Overlay/CreateOverlay";
import DetailsOverlay from "../../Components/details overlay/DetailsOverlay";
const LandingPage = () => {
  const { habits } = useHabitData();
  const [showCreateOverlay, setShowCreateOverlay] = useState(false);
  const [showDetailsOverlay, setShowDetailsOverlay] = useState(false);

  const showCreateOverlayHandler = () => {
    setShowCreateOverlay(true);
  };

  const showDetailsOverlayHandler = () => {
    setShowDetailsOverlay(true);
  };

  const closeCreateOverlayHandler = () => {
    setShowCreateOverlay(false);
    setShowDetailsOverlay(false);
  };

  return (
    <div className="container">
      <h1>Habits Recoder</h1>
      <p>Track your habits. Build your life.</p>
      <div className={styles.grid__container}>
        <HabitsCard
          habit={{ Name: "create your first habit" }}
          showCreateOverlayHandler={showCreateOverlayHandler}
        />
        {habits?.habits.map((habit) => (
          <HabitsCard
            key={habit.id}
            showDetailsOverlayHandler={showDetailsOverlayHandler}
            habit={habit}
          />
        ))}
      </div>
      {showCreateOverlay && (
        <CreateOverlay closeCreateOverlayHandler={closeCreateOverlayHandler} />
      )}
      {showDetailsOverlay && (
        <DetailsOverlay closeCreateOverlayHandler={closeCreateOverlayHandler} />
      )}
    </div>
  );
};

export default LandingPage;
