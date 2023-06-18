import Habits from "../Data/habits.Data";

const INITIAL__STATE = {
  habits: Habits,
  seletedHabit: {},
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
          id: payload.Name,
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
