import {Routes, Route, Navigate} from "react-router-dom"
import Dogs from "./components/Dogs";
import dogs from "./data";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavLink to="/"><h1>Helloz. We have dogz. Click on them for more info.</h1></NavLink>
      
      {/* With Routes we define which component will be rendered based on URL */}
      <Routes>
        <Route path="/dogs" element={<Dogs dogs={dogs}/>}>
          {/* :name - dynamical segment */}
          <Route path=":name" element={<Dogs dogs={dogs}/>}></Route>
        </Route>
         {/* A <Navigate> element changes the current location when it is rendered. It's a component wrapper around useNavigate  */}
        <Route path="*" element={<Navigate to={"/dogs"} />}></Route>
      </Routes>
    </div>
  );
}

//? Why don't we using <Outlet />

// An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered.  In our case we don't have a lot of components, only <Dog /> that will dynamically render dogs based on provided URL(picked link)

export default App;