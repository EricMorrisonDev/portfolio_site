import { skillsData } from "../data/skills"
import { motion } from 'framer-motion'

export function Skills () {

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 15
            }
        }
    }

    return(
        <>
            <h2 className="cabin-bold text-4xl md:text-5xl my-18 md:my-24 text-gray-300 text-center tracking-tight">Skills</h2>
            <motion.div 
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 w-4/5 mx-auto mt-10 gap-12">
                {skillsData.map((item, index) => {
                    return(
                        <motion.div 
                        key={index}
                        variants={itemVariants}
                        className="bg-slate-900/50 p-6 rounded-xl backdrop-blur-sm"
                        >
                            <div className="flex justify-between gap-6 items-center max-h-24 mx-8">
                                <p className="cabin-semibold text-xl md:text-2xl text-center text-gray-300 bg-clip-text">
                                    {item.title}
                                </p>
                                <img src={item.icon} className="h-[50px] w-[50px]"/>
                            </div>
                            <div className="mt-4 w-full px-4">
                                <ul className="mx-auto">
                                    {item.points.map((point, index) => {
                                        return(
                                            <li 
                                            key={index}
                                            className="cabin-regular text-gray-300 text-base list-disc my-4 leading-relaxed">
                                                {point}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </motion.div>
                    )
                })}
            </motion.div>
        
        
        </>
    )
}