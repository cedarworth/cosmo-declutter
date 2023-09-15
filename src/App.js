import { useState } from "react";
import AppRoutes from "./app.routing";

function App() {
  const [user, setUser] = useState(null)
  return (
    <AppRoutes user={user} setUser={setUser} />
  );
}

export default App;
