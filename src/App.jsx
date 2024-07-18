import { KeyboardControls } from "@react-three/drei";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import Loader from "./components/Loader";
import "./index.css"; // Import the CSS file

const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "run", keys: ["Shift"] },
];


function App() {

const [loading, setLoading] = useState(true);

useEffect(() => {
  const timeout = setTimeout(() => {
    setLoading(false);
  }, 2000); // Duration of the fade-out animation
  return () => clearTimeout(timeout);
}, []);


  return (
    <>
      {loading && <Loader />}
      <KeyboardControls map={keyboardMap}>
        <Canvas
          shadows
          camera={{ position: [5, 5, 5], near: 0.1, fov: 100 }}
          style={{
            touchAction: "none",
          }}
        >
          <color attach="background" args={["black"]} />
          <Experience />
        </Canvas>
      </KeyboardControls>
    </>
  );
}

export default App;
