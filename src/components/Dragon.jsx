import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Dragon(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/public/models/dragon.glb');
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    // Log available animations to the console
    console.log('Available animations:', names);

    // Example: Play the first animation
    if (names.length > 0) {
      actions[names[6]].play();
    }
  }, [actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, Math.PI]} scale={2.5}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="TO14_SK_MON_DPU_005ao_107">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <group name="TO14_SK_MON_DPU_005mo_106" />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.TO14_MI_CHEST0_DOAO_MON_DPU_005_MAT} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.TO14_MI_CLAW0_MH1O_MON_DPU_005_MAT} skeleton={nodes.Object_8.skeleton} />
                  <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.TO14_MI_CORE0_DOA_MON_DPU_005_MAT} skeleton={nodes.Object_9.skeleton} />
                  <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.TO14_MI_CORE0_GO_MON_DPU_005_MAT} skeleton={nodes.Object_10.skeleton} />
                  <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.TO14_MI_EYE0_GO_MON_DPU_005_MAT} skeleton={nodes.Object_11.skeleton} />
                  <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.TO14_MI_MOUTH0_DO_MON_DPU_005_MAT} skeleton={nodes.Object_12.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/public/models/dragon.glb');
