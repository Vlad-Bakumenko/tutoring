import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Vocals from "./views/Vocals";
import Guitar from "./views/Guitar";
import Bass from "./views/Bass";
import Drums from "./views/Drums";
import Band from "./views/Band";
import Login from "./views/Login";
import User from "./views/User";

// useReducer provides a way to manage complex state transitions in a more predictable and manageable way, while useContext allows you to pass data down the component tree without having to pass props manually through each level simply, making your data globally available.

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Band />} />
        <Route path="/vocals" element={<Vocals />} />
        <Route path="/guitar" element={<Guitar />} />
        <Route path="/bass" element={<Bass />} />
        <Route path="/drums" element={<Drums />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;