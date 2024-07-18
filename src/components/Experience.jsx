import { Environment, OrthographicCamera, Text } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useRef } from "react";
import { CharacterController } from "./CharacterController";
import { Map } from "./Map";
import { Dragon } from "./Dragon";
import { Pig } from "./Pig";
import { ThreeHead } from "./ThreeHead";

const maps = {
  swamp: {
    scale: 2,
    position: [-3, -31, 40],
  }
};

export const Experience = () => {
  const shadowCameraRef = useRef();

  return (
    <>
      <Environment preset="sunset" />
      <directionalLight
        intensity={0.65}
        castShadow
        position={[-15, 10, 15]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00005}
      >
        <OrthographicCamera
          left={-22}
          right={15}
          top={10}
          bottom={-20}
          ref={shadowCameraRef}
          attach={"shadow-camera"}
        />
      </directionalLight>
      <Physics>
        <Map
          scale={maps.swamp.scale}
          position={maps.swamp.position}
          model={`models/swamp.glb`}
        />
        <CharacterController />

        <Pig position={[11, -21, 7]} />
        <Dragon position={[-3, -25, 100]} />
        <ThreeHead position={[1.3, -30, 83]} />

        {/* Floating text above the Pig */}
        <Text
          position={[3, -10, 5]} // Adjust position as needed
          fontSize={3}
          color="white"
          anchorX="center"
          anchorY="middle"
          rotation={[0.3, 3, 0]}
        >
          Welcome to Ranak's Portfolio
        </Text>

        {/* Floating text and buttons near ThreeHead */}
        <Text
          position={[4, -21, 43]} // Adjust position as needed
          fontSize={3}
          color="white"
          anchorX="center"
          anchorY="middle"
          rotation={[0, 2.5, 0]}
        >
          Skills
        </Text>

        <Text
          position={[-3, -27, 95]} // Adjust position as needed
          fontSize={4}
          color="white"
          anchorX="center"
          anchorY="middle"
          rotation={[0, 3, 0]}
        >
          Projects
        </Text>
      </Physics>
    </>
  );
};
