import { useState } from "react";
import AppRoutes from "./app.routing";
// import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(null)
  return (
    <AppRoutes user={user} setUser={setUser} />

  );
}

export default App;
