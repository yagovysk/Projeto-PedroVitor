import "./App.css";
import { Home } from "./Components/Home/Home";
import { Revision } from "./Components/Revision/Revision";

export function App() {
  return (
    <main className="main-app">
      <Home />
      <Revision />
    </main>
  );
}
