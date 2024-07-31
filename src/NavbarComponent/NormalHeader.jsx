import { Link } from "react-router-dom";
import './NormalHeader.css'

const NormalHeader = () => {
  return (
    <>
    
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      
      <li className="nav-item">
        <Link
          to="/user/customer/register"
          className="nav-link active"
          aria-current="page"
        >
          <button className="btn btn-warning btn-lg fw-bold text-3xl py-6 px-6 border-2 border-dark text-white transition" role="button">Register</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/login" className="nav-link active" aria-current="page">
          <button className="btn btn-warning btn-lg fw-bold py-6 px-8 text-3xl border-2 border-dark text-white transition" role="button">SignIn</button>
        </Link>
      </li>
    </ul>
    </>
  );
};

export default NormalHeader;
