import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sigup from "./Auth/Sigup";
import Login from "./Auth/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles
import Dashboard from "./Components/Dashboard";
import WorkoutLog from "./Components/WorkoutLog";
import GoalSetting from "./Components/GoalSetting";
import { WorkoutProvider } from "./Components/WorkoutProvider";


function App() {
  return (
    <WorkoutProvider>
      <div className="App">
        <BrowserRouter>
        <ToastContainer />
          <Routes>
            <Route element={<Sigup />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<WorkoutLog />} path="/workoutlog" />
            <Route element={<GoalSetting />} path="/goals" />
          </Routes>
        </BrowserRouter>
      </div>
    </WorkoutProvider>
  );
}

export default App;
