import { useProgress, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Canvas>
        <Html center>
        <div className="loader">
            <div className="loader-spinner"></div>
            <div className="loader-text">Loading... {Math.round(progress)}%</div>
        </div>
        </Html>
    </Canvas>
  );
};

export default Loader;
