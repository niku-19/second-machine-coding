import Habits from "../Data/habits.Data";

const INITIAL__STATE = {
  habits: Habits,
  seletedHabit: {},
  archive: [],
};

const habitReducerFunc = (state, { type, payload }) => {
  console.log(
    "🚀 ~ file: Habits.reducer.js:8 ~ habitReducerFunc ~ payload:",
    payload
  );
  switch (type) {
    case "SELECTED_HABIT": {
      const selectedHabit = state.habits.find((habit) => habit.id === payload);
      return { ...state, seletedHabit: selectedHabit };
    }

    case "ADD_NEW_HABIT": {
      const newHabit = [
        ...state.habits,
        {
          id: payload?.id,
          Name: payload?.Name,
          repeat: "daily",
          goal: "2_times",
          time: "Morning",
          startDate: "today",
          desc: "Always set todo list to schedule your time tabel and it is good for health",
        },
      ];

      return {
        ...state,
        habits: newHabit,
      };
    }
    case "EDIT_HABIT": {
      console.log("🚀");
      const updatedHabit = state.habits.map((eachHabit) =>
        eachHabit.id === payload.id ? payload : eachHabit
      );
      console.log(
        "🚀 ~ file: Habits.reducer.js:54 ~ habitReducerFunc ~ updatedHabit:",
        updatedHabit
      );

      return {
        ...state,
        habits: updatedHabit,
      };
    }

    case "ADD_TO_ARCHIVE": {
      const removeFrom = state.habits.filter((habit) => habit.id !== payload);
      const addTo = state.habits.filter((habit) => habit.id === payload);

      return {
        ...state,
        habits: removeFrom,
        archive: [...state.archive, ...addTo],
      };
    }

    case "DELETE_HABIT": {
      const newHabit = state.habits.filter((habit) => habit.id !== payload);
      return {
        ...state,
        habits: newHabit,
      };
    }

    default: {
      return { ...state };
    }
  }
};

export { INITIAL__STATE, habitReducerFunc };
