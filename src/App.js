import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import { Button } from "react-bootstrap";
import {
  FaAngleDown,
  FaAngleUp,
  FaAngleLeft,
  FaAngleRight
} from "react-icons/fa";
export default class App extends React.Component {
  constructor(props) {
    super(props);

    // Next up create a new Unity Content object to
    // initialise and define your WebGL build. The
    // paths are relative from your index file.

    this.unityContent = new UnityContent(
      "/Build/Web.json",
      "/Build/UnityLoader.js"
    );
  }

  render() {
    return (
     
        <Unity unityContent={this.unityContent} />
  
    );

    // Finally render the Unity component and pass
    // the Unity content through the props.
  }
}
