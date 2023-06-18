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

  const editHabitFnc = (item) => {
    console.log("🚀 ~ file: Habit-context.jsx:27 ~ editHabitFnc ~ item:", item);
    console.log("runnig");
    dispatch({ type: "EDIT_HABIT", payload: item });
  };

  const addToArchive = (id) => {
    dispatch({ type: "ADD_TO_ARCHIVE", payload: id });
  };

  const deleteHabit = (id) => {
    dispatch({ type: "DELETE_HABIT", payload: id });
  };

  return (
    <HabitContext.Provider
      value={{
        habits,
        dispatch,
        seltectedHabit,
        addNewHabit,
        deleteHabit,
        editHabitFnc,
        addToArchive,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabitData = () => useContext(HabitContext);

export default HabitContextProvider;
