import { useEffect, useState } from "react";

const useWindowResize = () => {
    const [width, setwidth] = useState(window.innerWidth)
    const[height, setHeight] = useState(window.innerHeight) 

    useEffect (() => {
        const handleResize = () => {
            setwidth(window.innerWidth)
            setHeight(window.innerHeight) 
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    },[])

    return {width, height}
}

export default useWindowResize