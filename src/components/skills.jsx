import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Skills({id}) {
    const skillsList = [
        { name: "HTML", url: "src/images/html.png" },
        { name: "CSS", url: "src/images/css-3.png" },
        { name: "PHP", url: "src/images/php.png" },
        { name: "JavaScript", url: "src/images/js.png" },
        { name: "Tailwind", url: "src/images/tailwind-css.svg" },
        { name: "Bootstrap", url: "src/images/bootstrap.png" },
        { name: "React", url: "src/images/react.png" },
        { name: "Laravel", url: "src/images/laravel.svg" },
        { name: "Python", url: "src/images/py.png" },
        { name: "GSAP", url: "src/images/gsap.svg" },
        { name: "MotionFarm", url: "src/images/framer-motion.svg" },
        { name: "Node.js", url: "src/images/nodejs.png" },
        { name: "SQL", url: "src/images/sql.png" },
        { name: "MongoDB", url: "src/images/mongodb.svg" },
    ];

    const skillsRef = useRef(null);

    useEffect(() => {
        const time = gsap.timeline({duration:1})
gsap.registerPlugin(ScrollTrigger)
gsap.fromTo(skillsRef.current,{
    opacity:0, x:-100
}
        ,{
            opacity:1 , x:0,
            scrollTrigger:{
                trigger:skillsRef.current,
                start:"top 80%",
                end : "top 20%",
                scrub:true,
                once:true
            },
            duration:5
        }

)
time.fromTo(".skills",{
    opacity:0,
    y:-10,
    stagger:0.1
}
,
    {
        opacity:1,
        y:0,
        stagger:0.2,
        ease:"power0",
        scrollTrigger:{
            trigger:".skills",
            start:"top 80%",
            end : "top 20%",
            scrub:true,
            // once:true
        }
    }
)
    }, []);

    return (
        <div ref={skillsRef} id={id} className="bg-[#1A1A1A] py-10 px-4">
            <div className="text-center">
                <h1 className="text-5xl font-bold shadow text-[#4F46E5] mb-8">
                    My Skills
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skillsList.map((skill, index) => (
                        skill.name && (
                            <div key={index} className="flex skills flex-col items-center justify-center bg-[#202020] p-4 rounded-3xl shadow-md hover:scale-105 transition-all">
                                <img src={skill.url} alt={skill.name} className="w-16 h-16 mb-4 object-contain" />
                                <h2 className="text-xl text-white">{skill.name}</h2>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}
