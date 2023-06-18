/* eslint-disable react/prop-types */
import { useState } from "react";
import { useHabitData } from "../../Context/Habit-context";
import styles from "./EditOverlays.module.css";
import { GiTireIronCross } from "react-icons/gi";

const EditOverlay = ({ closeoverlay, closeCreateOverlayHandler }) => {
  const { habits, editHabitFnc } = useHabitData();

  const [editHabit, setEditHabit] = useState({
    id: habits?.seletedHabit?.id,
    Name: habits?.seletedHabit?.Name,
    repate: habits?.seletedHabit?.repate,
    goal: habits?.seletedHabit?.goal,
    time: habits?.seletedHabit?.time,
    startDate: habits?.seletedHabit?.startDate,
    desc: habits?.seletedHabit?.desc,
  });

  const editHabitHandler = (e, item) => {
    e.preventDefault();
    closeoverlay();
    closeCreateOverlayHandler();
    editHabitFnc(item);
  };

  return (
    <>
      <div
        className={styles.model__overlay}
        onClick={() => closeoverlay()}
      ></div>
      <div className={styles.model__container}>
        <h1>New Habits</h1>
        <div className={styles.details}>
          <h2>Add Your New habits Here</h2>
          <GiTireIronCross
            onClick={() => closeoverlay()}
            className={styles.close__icons}
          />
        </div>
        <div className={styles.form__container}>
          <form action="#">
            <div className={styles.form__group}>
              <label htmlFor="">Habits Name</label>
              <input
                type="text"
                name="habitsName"
                id="habitsName"
                placeholder="Add Your Habit Name"
                value={editHabit.Name}
                onChange={(e) =>
                  setEditHabit({ ...editHabit, Name: e.target.value })
                }
              />
            </div>
            <div className={styles.form__group}>
              <label htmlFor="">Repate</label>
              <select
                value={habits?.seletedHabit.repate}
                onChange={(e) =>
                  setEditHabit({ ...editHabit, repate: e.target.value })
                }
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className={styles.form__group}>
              <label htmlFor="">Goal</label>
              <select
                value={editHabit.goal}
                onChange={(e) =>
                  setEditHabit({ ...editHabit, goal: e.target.value })
                }
              >
                <option value="1_time">1 time</option>
                <option value="2_time">2 time</option>
                <option value="5_time">5 time</option>
                <option value="10_time">10 time</option>
                <option value="After_1_hour">After 1 hour</option>
              </select>
            </div>
            <div className={styles.form__group}>
              <label htmlFor="">Time Of the Day</label>
              <select
                value={editHabit.time}
                onChange={(e) =>
                  setEditHabit({ ...editHabit, time: e.target.value })
                }
              >
                <option value="any_time">Any Time</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
                <option value="Night">Night</option>
              </select>
            </div>
            <div className={styles.form__group}>
              <label htmlFor="">Start Date</label>
              <select
                value={editHabit.startDate}
                onChange={(e) =>
                  setEditHabit({ ...editHabit, startDate: e.target.value })
                }
              >
                <option value="Today">Today</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="This__Week">This Week</option>
                <option value="This__Month">This Month</option>
              </select>
            </div>
            <div className={styles.form__group}>
              <label htmlFor="">Habits Description</label>
              <textarea
                name="habitsDescription"
                id="habitsDescription"
                cols="30"
                rows="10"
                placeholder="Add Your Habit Description"
                value={editHabit.desc}
                onChange={(e) =>
                  setEditHabit({ ...editHabit, desc: e.target.value })
                }
              ></textarea>
            </div>
            <button onClick={(e) => editHabitHandler(e, editHabit)}>
              Confirm edit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditOverlay;
