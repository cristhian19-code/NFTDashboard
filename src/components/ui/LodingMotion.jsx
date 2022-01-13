import { motion } from "framer-motion"

export const LoadingMotion = () => {
    const text = "NFT"
    
    const letter = {
        hidden: {
            opacity: 0,
            y:-50
        },
        visible: {
            opacity: 1,
            y:0,
        }
    }

    const sentence = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 1
            }
        }
    }
    return (
        <motion.h1
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="absolute grid grid-cols-3 gap-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-purple-600"
        >
            {
                text.split("").map((el, index) => {
                    return (
                        <motion.span 
                            className="font-mono text-7xl md:text-8xl lg:text-9xl font-bold text-center"
                            key={index}
                            variants={letter}
                        >
                            {el}
                        </motion.span>
                    )
                })
            }
        </motion.h1>
    )
}