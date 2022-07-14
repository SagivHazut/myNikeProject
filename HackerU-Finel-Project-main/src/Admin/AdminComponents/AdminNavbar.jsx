import { NavLink } from "react-router-dom";
import "./NavBarComponent.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import nikelogo from "../../assets/nikelogo.png";

const NavBarComponent = (props) => {
  const dispatch = useDispatch();

  const IsloggedInRedux = useSelector((state) => state.auth.loggedIn);

  let logout = () => {
    localStorage.clear();
    dispatch(authActions.logout());
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid justify-content-center ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-end me-auto mb-2 mb-lg-0">
            <NavLink
              className="nav-link"
              aria-current="page"
              to="/Admin/transactions"
              activeClassName="activeLink"
            >
              transactions
            </NavLink>
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
