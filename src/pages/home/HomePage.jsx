import React from "react";
import PropTypes from "prop-types";
import { AirlineView } from "../../components/AirlineView/AirlineView";

export function HomePage({
  headerView,
  jumbotronView,
  airlineView,
  footerView,
}) {
  return (
    <>
        <header>{headerView}</header>
        <body className="container">
          <div className="row">
            <div className="col-sm">{jumbotronView}</div>
            <div className="row">
              {airlineView?.map(function (airline) {
                return (
                  <p key={airline.id} className="col-sm-6">
                    <AirlineView name={airline.name} path={airline.path} />
                  </p>
                );
              })}
            </div>
          </div>
        </body>
        <footer>{footerView}</footer>
    </>
  );
}

export default HomePage;

HomePage.propTypes = {
  headerView: PropTypes.any,
  jumbotronView: PropTypes.any,
  airlineView: PropTypes.any,
  footerView: PropTypes.any,
};
