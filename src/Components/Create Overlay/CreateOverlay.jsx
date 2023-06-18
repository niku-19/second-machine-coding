/* eslint-disable react/prop-types */
import { GiTireIronCross } from "react-icons/gi";

import styles from "./CreateOverlay.module.css";
import { useState } from "react";
import { useHabitData } from "../../Context/Habit-context";
const CreateOverlay = ({ closeCreateOverlayHandler }) => {
  const { addNewHabit } = useHabitData();
  const [newHabit, setNewHabit] = useState({
    Name: "",
    repate: "daily",
    goal: "1_time",
    time: "any_time",
    startDate: "Today",
    desc: "lets do it",
  });
  console.log(
    "🚀 ~ file: CreateOverlay.jsx:14 ~ CreateOverlay ~ newHabit:",
    newHabit
  );

  const handleAddNewHabit = (e, newToBeAddedHabits) => {
    console.log(
      "🚀 ~ file: CreateOverlay.jsx:23 ~ handleAddNewHabit ~ newToBeAddedHabits:",
      newToBeAddedHabits
    );
    e.preventDefault();
    addNewHabit(newToBeAddedHabits);
    closeCreateOverlayHandler();
  };

  return (
    <>
      <div
        className={styles.model__overlay}
        onClick={() => closeCreateOverlayHandler()}
      ></div>
      <div className={styles.model__container}>
        <h1>New Habits</h1>
        <div className={styles.details}>
          <h2>Add Your New habits Here</h2>
          <GiTireIronCross
            onClick={() => closeCreateOverlayHandler()}
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
                value={newHabit.habitsName}
                onChange={(e) =>
                  setNewHabit({ ...newHabit, Name: e.target.value })
                }
              />
            </div>
            <div className={styles.form__group}>
              <label htmlFor="">Repate</label>
              <select
                value={newHabit.repate}
                onChange={(e) =>
                  setNewHabit({ ...newHabit, repate: e.target.value })
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
                value={newHabit?.goal}
                onChange={(e) =>
                  setNewHabit({ ...newHabit, goal: e.target.value })
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
                value={newHabit?.time}
                onChange={(e) =>
                  setNewHabit({ ...newHabit, time: e.target.value })
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
                value={newHabit?.startDate}
                onChange={(e) =>
                  setNewHabit({ ...newHabit, startDate: e.target.value })
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
                value={newHabit?.desc}
                onChange={(e) =>
                  setNewHabit({ ...newHabit, desc: e.target.value })
                }
              ></textarea>
            </div>
            <button onClick={(e) => handleAddNewHabit(e, newHabit)}>
              Add Habits
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateOverlay;
