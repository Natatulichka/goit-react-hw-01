import React from "react";
import Profile from "./components/Profile";
// const dataFromServer = [{ descr: "Hello" }, { descr: "Guten Tag" }];
function App() {
  return (
    <div>
      <Profile descr="Hello" />
      <Profile descr="Guten Tag" />;
    </div>
  );
}
export default App;
