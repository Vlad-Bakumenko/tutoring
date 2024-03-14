import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <NavLink to="/">First</NavLink>
        <NavLink to="hundred">Hundred</NavLink>
        <NavLink to="todo">Todo</NavLink>
      </nav>
    </>
  );
}

export default Nav;
