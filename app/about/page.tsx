import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { 
  Code, 
  FileJson, 
  Globe, 
  Layout, 
  Palette, 
  Server, 
  GraduationCap,
  BookOpen
} from 'lucide-react'

export default function About() {
  const skills = [
    { name: "React", icon: <Code className="w-6 h-6" /> },
    { name: "Next.js", icon: <Globe className="w-6 h-6" /> },
    { name: "TypeScript", icon: <FileJson className="w-6 h-6" /> },
    { name: "JavaScript", icon: <FileJson className="w-6 h-6" /> },
    { name: "HTML5", icon: <Layout className="w-6 h-6" /> },
    { name: "CSS3", icon: <Palette className="w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <Palette className="w-6 h-6" /> },
    { name: "Node.js", icon: <Server className="w-6 h-6" /> },
    { name: "Python", icon: <FileJson className="w-6 h-6" /> },
    { name: "Django", icon: <Globe className="w-6 h-6" /> }
  ]

  const education = [
    {
      title: "Intermediate in Computer Science",
      institution: "Adamjee Institute",
      year: "2022 - 2024",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ]

  const courses = [
    {
      title: "Agentic AI",
      platform: "GIAIC",
      year: "2024-2025",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Front-End Developement",
      platform: "GIAIC",
      year: "2024",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Python Web Mastery",
      platform: "SMIT",
      year: "2024-2025",
      icon: <BookOpen className="w-6 h-6" />
    }
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <Card className="w-full max-w-3xl mb-8">
        <CardContent className="p-6">
          <p className="lg:text-lg md:text-lg sm:text-xs mb-4 ">
           I am Hashir, a passionate web developer with a keen eye for creating responsive and user friendly websites. 
            With a strong foundation in modern web technologies, I specialize in building robust and scalable applications 
            that deliver exceptional user experiences.
          </p>
          <p className="lg:text-lg md:text-lg">
            My journey in web development has equipped me with a diverse skill set, allowing me to tackle complex 
            challenges and bring innovative ideas to life through code. I am constantly learning and staying 
            up-to-date with the latest trends in web development to ensure I deliver cutting-edge solutions.
          </p>
        </CardContent>
      </Card>

      <h1 className="text-3xl font-bold mb-6">My Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8 w-full max-w-3xl">
        {skills.map((skill, index) => (
          <Card key={index} className="bg-accent text-accent-foreground">
            <CardContent className="p-4 flex flex-col items-center justify-center">
              {skill.icon}
              <b className="text-sm font-semibold mt-2">{skill.name}</b>
            </CardContent>
          </Card>
        ))}
      </div>

      <h1 className="text-3xl font-bold mb-6">Education & Courses</h1>
      <div className="grid gap-6 mb-8 w-full max-w-3xl">
        {education.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.institution}</p>
              <p className="text-sm text-muted-foreground">{item.year}</p>
            </CardContent>
          </Card>
        ))}
        {courses.map((course, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                {course.icon}
                <span className="ml-2">{course.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{course.platform}</p>
              <p className="text-sm text-muted-foreground">{course.year}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Button asChild>
          <Link href="/projects">View My Projects</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Me</Link>
        </Button>
      </div>
    </div>
  )
}
