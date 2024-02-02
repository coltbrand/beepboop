import * as components from "./components/index";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
export const UserContext = React.createContext(null);

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <BrowserRouter>
          <components.Header />
          <components.Router />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
