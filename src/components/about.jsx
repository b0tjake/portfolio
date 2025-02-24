import { easeInOut, easeOut, motion } from "framer-motion";
import { useState } from "react";

export default function About({id}) {
    const [onEnter, setOnEnter] = useState(false);

    const onMouse = () => {
        setOnEnter(!onEnter);
    };
    const parentDiv = {
        hidden:{opacity:0},
        visible : {
            opacity:1,
            transition:{
                staggerChildren:0.4,
                
            }
        }

    }
    const childElements={
        hidden:{opacity:0,x:-50},
        visible:{opacity:1,x:0 ,transition:{
            duration:1,
            ease:easeOut
        }}
    }
    const childElements2={

        hidden:{opacity:0,y:-50},
        visible:{opacity:1,y:0,transition:{
            duration:0.3
        }}

    }

    return (
        <motion.div id={id}


        className="w-full flex flex-col justify-center items-center h-fit p-16 sm:p-32 bg-cover bg-center bg-[url(images/aboutbg.png)]">
            <motion.div             variants={parentDiv}
            initial="hidden"
            animate="visible" className="flex flex-col lg:flex-row justify-center items-center w-full space-y-10 lg:space-y-0 lg:space-x-10">
                <motion.img
                    src="src/images/portfolioPic.jpg"
                    className="w-60 h-60 sm:w-80 sm:h-80 rounded-full hover:transition-all  hover:scale-110"
                variants={childElements}
                />

                <motion.div 
                
                className="text-white text-center lg:text-left w-full lg:w-1/2 cursor-default">
                    <motion.h4 variants={childElements2} className="text-3xl font-medium mb-4">
                        Hello<motion.span
                            onMouseEnter={onMouse}
                            animate={{ rotate: onEnter ? 320 : 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl text-indigo-500 ml-2 cursor-pointer"
                        >👋
                        </motion.span> my name is
      
                    </motion.h4>
                    <motion.h1 variants={childElements2} className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-950 mb-6">
                        Trafeh Zouhair
                    </motion.h1>
                    <motion.p  variants={childElements2} className="text-xl sm:text-2xl mb-8 px-4 sm:px-0">
                        I'm a web developer passionate about creating dynamic, user-friendly web applications. 
                        I love exploring new technologies and constantly improving my skills. 
                        With expertise in both front-end and back-end development, 
                        I bring strong soft skills like problem-solving, communication, and collaboration to every project.
                    </motion.p>

                    <div className="flex justify-center  lg:justify-start space-x-6">
                        <motion.a
                        href="/TrafehZouhair.pdf"
                        download="Trafeh Zouhair"
                            className="cursor-pointer border-2 border-blue-700 text-white py-3 px-6 rounded-xl text-xl flex items-center  hover:bg-indigo-600 hover:border-transparent"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            variants={childElements}

                        >
                            Download CV
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7l-7 7-7-7" />
                            </svg>
                        </motion.a>
                        <motion.button
                            className="cursor-pointer py-3 px-6 text-xl rounded-xl text-white bg-indigo-600 hover:bg-indigo-700  "
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            variants={childElements}
                        >
                            Contact me
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
