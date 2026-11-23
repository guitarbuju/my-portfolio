import mainRouter from "../Routes/mainRouter";
import { RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <RouterProvider router={mainRouter} />
    </div>
  );
}

export default App;
