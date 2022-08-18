import React from "react";
import logo from "../../public/images/BidProLogo.gif";

/**
 * View component that displays the BidPro logo
 */
export function LogoView() {
  return (
    <div>
      <img src={"/" + logo} />
    </div>
  );
}
