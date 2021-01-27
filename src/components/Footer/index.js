import React from "react";

import Community from "./Community";
import NavigationFooter from "./NavigationFooter";
import ServiceMain from "./ServiceMain";
import Contact from "./Contact";
import Credits from "./Credits";

import { Hidden } from "@material-ui/core";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <Community />

      <ServiceMain />

      <Contact />
      <Hidden smDown>
        <NavigationFooter />
      </Hidden>

      <Credits />
    </footer>
  );
}
