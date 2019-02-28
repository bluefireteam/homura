import React from "react";
import { connect } from "react-redux";
import WelcomePanel from "../WelcomPanel";
import MessageBoard from "../MessageBoard";
import Toolbar from "../Toolbar";
import SideBar from "../SideBar";

const mapStateToProps = ({ project: { project, projectPath } }) => ({
  name,
  project,
})

const IDEPanel = ({ project }) => (
  <div className="editor full-size">
    <div className="toolbar-container">
      <Toolbar />
    </div>
    <div className="main-panel">
      <div className="side-panel panel">
        <SideBar />
      </div>
      <div className="editor-panel panel">
      </div>
    </div>
  </div>
)

const IDE = ({ project, projectPath }) => (
  <div className="full-size">
    <MessageBoard />
    {
      project 
        ? <IDEPanel project={project} />
        : <WelcomePanel />
    }
  </div>
)

export default connect(mapStateToProps)(IDE);
