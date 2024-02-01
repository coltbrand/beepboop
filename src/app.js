import "./app.css";
import Cookies from "js-cookie";
import * as com from "./components";

export const getAccessToken = () => Cookies.get("access_token");
export const getRefreshToken = () => Cookies.get("refresh_token");
export const isAuthenticated = () => !!getAccessToken();

function App() {
  return (
    <div>
      <com.Router></com.Router>
    </div>
  );
}

export default App;
