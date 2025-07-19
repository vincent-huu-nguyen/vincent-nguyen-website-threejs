import { Canvas } from '@react-three/fiber'

export default function ThreeScene() {
  return (
    <Canvas style={{ background: 'black' }} camera={{ position: [0, 0, 5] }}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshBasicMaterial color="cyan" />
      </mesh>
    </Canvas>
  )
}
