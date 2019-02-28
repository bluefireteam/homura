import React from "react"
import path from "path"

export default ({ projectPath, source }) => (
  <div>
    <img src={path.join(projectPath, "assets", source)} />
  </div>
)
