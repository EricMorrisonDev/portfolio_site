import { techLogos } from "../data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

export function ProjectCard(props) {
    // needs title, description, img, tech stack, links
    const { project, index } = props

    const [isSmallDisplay, setIsSmallDisplay] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 760){
                setIsSmallDisplay(true)
            } else {
                setIsSmallDisplay(false)
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }; 

    return(
        <>
        {index % 2 === 0 || isSmallDisplay ? (
            <motion.div 
            className="md:grid grid-cols-2 md:h-max gap-8"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: isSmallDisplay ? 0.1 : 0.2 }}
            >
                <div className="md:col-span-1 md:p-8">
                    <h3 className="text-cyan-400 nunito-sans-regular text-3xl">{project.title}</h3>
                    <p className="text-gray-300 nunito-sans-regular text-lg my-6">{project.description}</p>
                    <ul className="grid grid-cols-4 md:flex gap-4 md:gap-8 mb-8">
                        {project.stack.map((item, index) => (
                            <li key={index}><img className="h-[50px] w-[50px] rounded-md" 
                            src={techLogos[item]}/></li>
                        ))}
                    </ul>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <p className="text-cyan-400">{project.link}</p>
                    </a>
                </div>
                <div className="mt-8 md:mt-0 md:col-span-1 md:h-[400px]">
                    <Swiper 
                    spaceBetween={project.app? 5 : 20} 
                    slidesPerView={project.app ? (isSmallDisplay ? 1 : 2) : 1}
                    modules={[Navigation]}
                    navigation={true}
                    slidesOffsetBefore={project.app ? (isSmallDisplay? 0 : 75) : 0}
                    >
                        {/* if the display is small AND the project has mobile images, we show those. If there are no mobile images, it's an app and has mobile size imgs by default so we just use project.imgs */}
                        {(isSmallDisplay? project.mobileImgs ? project.mobileImgs : project.imgs : project.imgs).map((img, index) => (
                            <SwiperSlide key={index}
                            className="mx-auto">
                                <img src={img} 
                                className={project.app ? "rounded-[1.5rem] md:h-[400px] border-2 border-cyan-300 object-cover" : isSmallDisplay ? "rounded-[1.5rem] md:h-[400px] border-2 border-cyan-300" : "rounded-lg h-[400px] w-full object-cover border-2"}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {project.videoLink && (
                    <div className="col-span-2 md:h-[400px] mt-12">
                    <iframe 
                        src={project.videoLink}
                        className="w-full md:w-1/2 md:h-full mx-auto"
                        allowFullScreen
                    />
                    </div>
                )}
            </motion.div>
        ) : (
            <motion.div 
            className="md:grid grid-cols-2 md:h-[400px] gap-8"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            >
                <div className="w-full md:col-span-1 md:h-[400px]">
                    <Swiper 
                    spaceBetween={project.app? 5 : 20} 
                    slidesPerView={project.app ? 2 : 1}
                    modules={[Navigation]}
                    navigation={true}
                    slidesOffsetBefore={project.app ? 80 : 0}
                    >
                        {project.imgs.map((img, index) => (
                            <SwiperSlide key={index}
                            className="mx-auto">
                                <img src={img} 
                                className={project.app ? "rounded-lg h-[400px] border-2 border-cyan-300" : "rounded-lg h-[400px] w-full object-cover border-2"}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="md:col-span-1 p-8">
                    <h3 className="text-cyan-400 nunito-sans-regular text-3xl">{project.title}</h3>
                    <p className="text-gray-300 nunito-sans-regular text-lg my-6">{project.description}</p>
                    <ul className="flex gap-4 mb-8">
                        {project.stack.map((item, index) => (
                            <li key={index}><img className="h-[50px] w-[50px] rounded-md" 
                            src={techLogos[item]}/></li>
                        ))}
                    </ul>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <p className="text-cyan-400">{project.link}</p>
                    </a>
                </div>
                {project.videoLink && (
                    <div className="col-span-2 md:h-[400px] mt-12">
                    <iframe 
                        src={project.videoLink}
                        className="w-full md:w-1/2 md:h-full mx-auto"
                        allowFullScreen
                    />
                    </div>
                )}
            </motion.div>
        )}
        </>
    )
}