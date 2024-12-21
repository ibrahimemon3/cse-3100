import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center justify-content-between bg-light px-4 py-3">
        <h1 className="m-0">
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <nav>
          <ul className="nav m-0">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/available-cats">
                Available Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/donate">
                Donate
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main id="content" className="container mt-4">
        <Outlet />
      </main>

      <footer className="bg-light text-center py-3 mt-5">
        <p className="mb-0">© Copyright 2024 Purrfect Adoption. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
