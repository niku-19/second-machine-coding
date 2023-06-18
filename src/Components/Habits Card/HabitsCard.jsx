/* eslint-disable react/prop-types */
import { useHabitData } from "../../Context/Habit-context";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";

import styles from "./HabitsCard.module.css";

const HabitsCard = ({
  habit,
  showCreateOverlayHandler,
  showDetailsOverlayHandler,
  showEditOverlayHandler,
}) => {
  const { seltectedHabit, deleteHabit } = useHabitData();

  const openModelOverlay = () => {
    if (habit.Name === "create your first habit") {
      showCreateOverlayHandler();
    } else {
      showDetailsOverlayHandler();
    }

    seltectedHabit(habit.id);
  };

  const handleDeleteHabit = (e) => {
    e.stopPropagation();
    deleteHabit(habit.id);
  };

  const handleEditHabit = () => {
    showEditOverlayHandler();
  };

  return (
    <div className={styles.card} onClick={openModelOverlay}>
      <h3 className={styles.card__title}>{habit.Name}</h3>
      {showDetailsOverlayHandler && (
        <div className={styles.icons__container}>
          <AiFillDelete
            className={styles.delete__icon}
            onClick={handleDeleteHabit}
          />
          <AiTwotoneEdit
            className={styles.delete__icon}
            onClick={handleEditHabit}
          />
        </div>
      )}
    </div>
  );
};

export default HabitsCard;
