import { connect } from "react-redux";
import SideBar from "../../components/SideBar";

const mapStateToProps = ({ project: { projectPath, project }}) => ({ projectPath, project });

const mapDispatchToProps = dispatch => ({
  onLayerSelect: layer => {
    console.log(layer)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
