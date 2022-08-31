import React, { Component } from "react";

export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsMonkey
            </a>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    about
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/business">
                    business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/entertainment">
                    entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/health">
                    health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/science">
                    science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/sports">
                    sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/technology">
                    technology
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select your region
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="/india">
                        India
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/usa">
                        USA
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/southafrica">
                        South Africa
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
