import React from "react";
import { Toolbar } from "@material-ui/core";

import HelmetHeader from '../components/content/HelmetHeader';
import MaterialBase from '../components/wrappers/MaterialBase';
import Navbar from '../components/content/Navbar';
import AboutMe from '../components/content/AboutMe';
import Introduction from '../components/content/Introduction';
import FloatingButton from '../components/content/FloatingButton';
import Education from "../components/content/Education";

class IndexPage extends React.Component {
  render() {
    return (
      <MaterialBase>
        <HelmetHeader />
        <Navbar />
        <Toolbar />
        <Introduction />
        <FloatingButton />
        <AboutMe />
        <Education />
      </MaterialBase>
    );
  }
}

export default IndexPage;
