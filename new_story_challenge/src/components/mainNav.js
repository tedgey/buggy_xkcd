import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const mainNav = props => {
  const { routes } = props;
  return (
    <nav>
      <ul>
        {routes.map(route => (
          <li key={`link-${route.linkName}`}>
            <Link to={route.linkRoute}>{route.linkName}</Link>
          </li>
        ))
      </ul>}
    </nav>
  );
};

mainNav.propTypes = {
  routes: PropTypes.array
};
