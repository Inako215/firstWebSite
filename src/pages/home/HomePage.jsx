import React from "react";
import { AirlineView } from "../../components/AirlineView/AirlineView";
import { JumbotronView } from "../../components/JumbotronView/JumbotronView";
import { AdministrationView } from "../../components/AdministrationView/AdministrationView";
import { VersionView } from "../../components/VersionView/VersionView";

export function HomePage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <JumbotronView
            administrationView={<AdministrationView name={"Tom Jones"} />}
            versionView={<VersionView current={"1.1.0"} />}
          />
        </div>
        <div className="row">
          <AirlineView
            name={"American Airlines"}
            path={"american-airlines/bidtypes"}
          />
          <AirlineView
            name={"Alaska Airlines"}
            path={"alaska-airlines/bidtypes"}
          />
        </div>
        <div className="row">
          <AirlineView
            name={"Frontier Airlines"}
            path={"frontier-airlines/bidtypes"}
          />
          <AirlineView name={"UPS"} path={"ups-airlines/bidtypes"} />
        </div>
      </div>
      {/* <header>{headerView}</header>
        <div className="container">
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
        </div>
        <footer>{footerView}</footer> */}
    </>
  );
}

export default HomePage;
