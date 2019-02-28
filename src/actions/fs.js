const fs = window.require("fs");
const path = window.require("path");

export const readProject = projectFilePath => dispatch => {
  const projectPath = path.dirname(projectFilePath);
  const projectFile = JSON.parse(fs.readFileSync(projectFilePath, "utf8"));

  dispatch({
    type: "READ_PROJECT",
    payload: {
      projectPath,
      project: projectFile,
    }
  });
}
