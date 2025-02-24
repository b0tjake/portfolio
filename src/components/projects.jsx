import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

export default function Projects({id}) {
    
const ref = useRef(null)
    // const time = gsap.timeline({duration:1})
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo(ref.current , {
            opacity : 0,
            x:-100,
             
        },{
            opacity:1 , x:0,
            scrollTrigger:{
                trigger:ref.current,
                start:"top 80%",
                end : "top 20%",
                scrub:true,
                once:true,
            }
        }
    
    )
    const time = gsap.timeline({duration:1})
    time.fromTo(".pro",{
        opacity:0,
        y:-100
    },
    {
        opacity:1,
        y:0,
        stagger:0.5,
        scrollTrigger:{
            trigger:".pro",
            start:"top 80%",
            end : "top 30%",
            scrub:true

        }
    }
)

    },[])


    const projects =  [
        { 
            name: "ShopArt",
            description: "Website that sells artworks.",
            languages: "HTML, CSS, PHP, Tailwind",
            url: "https://github.com/TeamsProject/Ecommerce-app",
            work: "In a team",
            img: "src/images/shopArt.PNG"
        },
        { 
            name: "eJotia",
            description: "A website that sells clothes and other things.",
            languages: "ReactJs, PHP, CSS, Tailwind, GSAP",
            url: "https://github.com/b0tjake/multiShop",
            work: "Alone",
            img: "src/images/ejotia.jpeg"
        },
        { 
            name: "Stadium-Lock",
            description: "A sports platform where you can find stadiums to play with your team or watch matches.",
            languages: "ReactJs, PHP, CSS, Tailwind, GSAP",
            url: "https://github.com/Rapid0Team/Stadium-lock.git",
            work: "In a team",
            img: "src/images/9abada.jpeg"
        }
    ];

    return (
        <div ref={ref} id={id} className="container mx-auto px-4 bg-[#1a1a1a] py-20">
            <h1 className="text-5xl font-bold text-center mb-10 text-[#4F46E5] shadow">My Projects</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-[#060fae0c] pro hover:scale-105  shadow-lg rounded-lg  p-4">
                        <img src={project.img} alt={project.name} className={`w-full  h-48  object-cover rounded-md`} />
                        <div className="p-4">
                            <h2 className=" font-bold text-white text-2xl ">{project.name}</h2>
                            <p className="text-gray-600 mt-2">{project.description}</p>
                            <p className="text-sm text-gray-500 mt-1"><strong>Languages:</strong> {project.languages}</p>
                            <p className="text-sm text-gray-500 mt-1"><strong>Work:</strong> {project.work}</p>
                            <div className="flex justify-center items-center">
                            <a 
                                href={project.url}  
                                className=" text-center font-medium text-xl bg-[#001c7225] hover:bg-blue-950 shadow-md shadow-[#4d4d4d] text-white py-2 px-4 rounded-md transition-all duration-300"
                            >
                                View Project
                            </a>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
