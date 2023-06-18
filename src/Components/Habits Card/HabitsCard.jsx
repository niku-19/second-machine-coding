/* eslint-disable react/prop-types */
import { useHabitData } from "../../Context/Habit-context";
import { AiFillDelete } from "react-icons/ai";
import { BiArchiveIn } from "react-icons/bi";

import styles from "./HabitsCard.module.css";

const HabitsCard = ({
  habit,
  showCreateOverlayHandler,
  showDetailsOverlayHandler,
}) => {
  const { seltectedHabit, deleteHabit, addToArchive } = useHabitData();

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

  const handleArchiveHabit = (e) => {
    e.stopPropagation();
    addToArchive(habit.id);
  };

  return (
    <div className={styles.card} onClick={openModelOverlay}>
      <h3 className={styles.card__title}>{habit.Name}</h3>
      {showDetailsOverlayHandler && (
        <div className={styles.icons__container}>
          <AiFillDelete
            className={styles.delete__icon}
            onClick={(e) => handleDeleteHabit(e)}
          />
          <BiArchiveIn
            className={styles.delete__icon}
            onClick={(e) => handleArchiveHabit(e)}
          />
        </div>
      )}
    </div>
  );
};

export default HabitsCard;
