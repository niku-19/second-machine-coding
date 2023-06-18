import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import HabitContextProvider from "./Context/Habit-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <HabitContextProvider>
        <App />
      </HabitContextProvider>
    </BrowserRouter>
  </>
);
