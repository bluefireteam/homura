import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Asset from "../Asset"

import "./styles.css"

export default ({ projectPath, project, onLayerSelect }) => (
  <div className="side-bar-panel">
    <div>
      <h2> Layers </h2>
      <ul className="side-bar-item-list">
        {
          project.layers.map((layer, idx) => (
            <li key={`Asset-${idx}`} onClick={() => onLayerSelect(layer)}>
              <Asset projectPath={projectPath} source={layer.asset} />
            </li>
          ))
        }
      </ul>
    </div>
  </div>
)
