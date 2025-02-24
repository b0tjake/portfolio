import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Contact({ id }) {

    const ref = useRef()
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo(ref.current,{
            opacity:0,
            x:-100
        },{
            opacity:1,
            x:0,
            scrollTrigger:{
                trigger:ref.current,
                start : "top 80%",
                end : "top 30%",
                scrub:true,
                once:true,
            },
            duration:2
        }

        
    )

    const time = gsap.timeline({duration:1})
    time.fromTo(".lr",{
        opacity:0,
        y:-100
    },
    {
        opacity:1,
        y:0,
        stagger:0.5,
        scrollTrigger:{
            trigger:".lr",
            start:"top 80%",
            end : "top 30%",
            scrub:true

        }
    }
)


    },[])

    return (
        <div id={id} ref={ref} className="container bg-[#1a1a1a]  mx-auto px-6 py-16 pb-28 ">

            <h1 className="text-5xl text-center font-bold shadow text-[#4F46E5] mb-8">Contact Me</h1>
    

            <div className="flex flex-col  md:flex-row gap-12">

                <div className="md:w-1/3 lr bg-[#373737] text-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4   text-white">Contact Information</h2>

                    <div className="flex items-center space-x-4 mb-4">
                        <Phone className="text-blue-500" />
                        <p className=" text-white text-lg">+212 608836080</p>
                    </div>

                    <div className="flex items-center space-x-4 mb-4">
                        <Mail className="text-red-500" />
                        <p className=" text-white text-lg">mouadtrafeh14@gmail.com</p>
                    </div>

                    <div className="flex items-center space-x-4 mb-4">
                        <MapPin className="text-green-500" />
                        <p className=" text-white text-lg">Casablanca, Morocco</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="mt-6 flex space-x-6">
                        <a href="https://www.linkedin.com/in/trafeh-zouhair-11a521246/" className=" text-white hover:text-blue-700 text-2xl">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://x.com/TrafehZ" className=" text-white hover:text-neutral-800 text-2xl">
                        <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                        <a href="https://github.com/b0tjake"  className=" text-white hover:text-neutral-300 text-2xl">
                        <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>

                <div className="md:w-2/3 lr  bg-[#2b2b2b34] p-6 rounded-xl shadow-lg">
                    <h2 className="text-2xl text-white font-semibold mb-4 ">Send Me a Message</h2>

                    <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col space-y-4">
                    <input type="hidden" name="access_key" value="b21f34d2-3971-42e2-8c31-c35181e8ea46"/>
                            <div className="flex justify-center gap-4">
                                
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            required
                            className="p-3 border w-1/2 placeholder:text-white border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-100"
                        />
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Your Email"
                            className="p-3 w-1/2 border placeholder:text-white border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-100"
                        />
                            </div>
                        <textarea
                            placeholder="Your Message"
                            name="message"
                            required
                            rows="4"
                            className="p-3 border placeholder:text-white border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-100"
                        />
                        <div className="flex justify-center">
                        <button
                            type="submit"
                            // onClick={location.reload()}
                            className="bg-[#040b3a2b] text-white py-3 w-fit px-4 rounded-lg hover:bg-[#36354842] cursor-pointer transition duration-300 text-lg font-semibold"
                        >
                            Send Message
                        </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
