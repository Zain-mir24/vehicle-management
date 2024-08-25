import AppRouter from "router/router";
import { RouterProvider } from "react-router-dom";
function App() {
  return <RouterProvider router={AppRouter()} />;
}

export default App;
