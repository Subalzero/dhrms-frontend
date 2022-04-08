import { useAuth } from "./services/AuthProvider";
import LogIn from "./components/LogIn";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import SideBarMenu from "./components/SideBarMenu";
import EmployeesScreen from "./components/EmployeesScreen";
import SettingsScreen from "./components/SettingsScreen";

function App() {
  const auth = useAuth();
  const currentUser = auth.currentUser;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/"
          exact
          element={
            !currentUser ? (
              <Navigate to="/login" replace />
            ) : (
              <Header>
                <SideBarMenu>
                  <Outlet />
                </SideBarMenu>
              </Header>
            )
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="employees" element={<EmployeesScreen />} />
          <Route path="settings" element={<SettingsScreen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
