import { NavLink } from "react-router-dom";

import "./index.scss";

const Aside = () => {
  return (
    <aside>
      <section>
        <h3>Other articles</h3>
        <ul>
          <li>
            <NavLink activeClassName="nav-link-selected" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav-link-selected" to="/catalog">
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav-link-selected" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav-link-selected" to="/admin/profile">
              Admin
            </NavLink>
          </li>
        </ul>
      </section>
    </aside>
  );
};
export default Aside;
