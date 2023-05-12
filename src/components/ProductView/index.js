import {Canvas, useFrame} from '@react-three/fiber';
import {OrbitControls, useGLTF} from '@react-three/drei';
import {useRef} from 'react';

function Playstation() {
  const {scene} = useGLTF("./playstation.gltf");
  const playRef = useRef();
  useFrame(() =>{
    playRef.current.rotation.y += 0.005;
  });

  return <primitive ref = {playRef} object = {scene} scale = {1} />;
}


//function Box(){
//  return(
//    <mesh>
//      <boxBufferGeometry attach="geometry"/>
//      <meshLambertMaterial attach="material" color="green"/>
//    </mesh>
//  )
//}

function ProductView() {
 return <Canvas camera = {{fov: 30, position: [-10, 50, 100]}} 
                style={{height: window.innerHeight - 90}}>
  <OrbitControls/>
  <ambientLight intensity = {0.7} />
  <spotLight position = {[70, 30, 70]} angle = {0.8} />
  {/*<Box/>*/}
  <Playstation/>
 </Canvas>
}


export default ProductView;