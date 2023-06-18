/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { INITIAL__STATE, habitReducerFunc } from "../reducer/Habits.reducer";

const HabitContext = createContext(null);

const HabitContextProvider = ({ children }) => {
  const [habits, dispatch] = useReducer(habitReducerFunc, INITIAL__STATE);
  console.log(
    "🚀 ~ file: Habit-context.jsx:9 ~ HabitContextProvider ~ habits:",
    habits
  );

  const seltectedHabit = (id) => {
    dispatch({ type: "SELECTED_HABIT", payload: id });
  };

  const addNewHabit = (newHabit) => {
    console.log(
      "🚀 ~ file: Habit-context.jsx:19 ~ addNewHabit ~ newHabit:",
      newHabit
    );
    dispatch({ type: "ADD_NEW_HABIT", payload: newHabit });
  };

  const deleteHabit = (id) => {
    dispatch({ type: "DELETE_HABIT", payload: id });
  };

  return (
    <HabitContext.Provider
      value={{ habits, dispatch, seltectedHabit, addNewHabit, deleteHabit }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabitData = () => useContext(HabitContext);

export default HabitContextProvider;
