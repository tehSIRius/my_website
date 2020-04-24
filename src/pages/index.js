import React from "react";

import MaterialBase from '../components/MaterialBase';
import Navbar from '../components/Navbar';
import AboutMe from '../components/AboutMe';
import Introduction from '../components/Introduction';
import { Toolbar } from "@material-ui/core";

class IndexPage extends React.Component {

  render() {
    return (
      <MaterialBase>
        <Navbar />
        <Toolbar />
        <Introduction />
        <AboutMe />
      </MaterialBase>
    );
  }
}

export default IndexPage
