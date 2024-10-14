import { Canvas } from '@react-three/fiber'
import React from 'react'

const RenderModel = ({children, className}) => {
    return (
        <Canvas>
        className={clsx("w-screen h-screen relative", className)}
            <Suspense fallback={null}>
                {children}
            </Suspense>
        </Canvas>
    )
}

export default RenderModel