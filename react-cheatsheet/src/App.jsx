import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import Cheatsheet from "./components/Cheatsheet/Cheatsheet";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="cheatsheet" element={<Cheatsheet/>}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
