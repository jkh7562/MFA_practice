import { RouterProvider } from "react-router-dom";
import root from "./router/root";
import "./index.css";



const App = () => {
  return (
    <div>
      <div>Header Area</div>
      <RouterProvider router={root} />
    </div>
  );
};

export default App;