import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa"; // Import icons from react-icons
import hero from "../public/hero.jpg";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-200px)] px-8">
      
      {/* Image Section */}
      <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-8">
        <div className="rounded-full overflow-hidden h-60 w-60 md:h-80 md:w-80 shadow-lg mx-auto  ">
          <Image
            src={hero}
            alt="Hero" 
          />
        </div>
      </div>
      
      {/* Text Section */}
      <div className="flex flex-col items-center justify-center text-center lg:text-left">
        <h1 className="lg:text-6xl sm:text-4xl  font-bold mb-4 ">Hello, I am Hashir</h1>
        <p className="lg:text-xl  mb-8 max-w-2xl">
          I'm a passionate <span>Front-End</span> web developer specializing in creating responsive and user-friendly websites.
          With expertise in React, Next.js, and modern web technologies, I bring ideas to life through code.
        </p>

        {/* Button Section */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <Button asChild>
            <Link href="/projects">View My Projects</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>

        <div className="flex space-x-4 mt-6">
          <Link href="https://www.instagram.com/eyemnoob/" target="_blank" aria-label="Instagram">
            <FaInstagram className="text-primary hover:text-accent text-2xl" />
          </Link>
          <Link href="https://www.facebook.com/hashirdada.irshad" target="_blank" aria-label="Facebook">
            <FaFacebookF className="text-primary hover:text-accent text-2xl" />
          </Link>
          <Link href="https://linkedin.com/in/hashir-hussain-1a5a3b2ba" target="_blank" aria-label="LinkedIn">
            <FaLinkedinIn className="text-primary hover:text-accent text-2xl" />
          </Link>
          <Link href="https://github.com/hashir-qt" target="_blank" aria-label="GitHub">
            <FaGithub className="text-primary hover:text-accent text-2xl" />
          </Link>
        </div>
      </div>
      
    </div>
  );
}
