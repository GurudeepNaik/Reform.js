import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Footer from "./footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const keyFeatures = [
  {
    title: "Customizable Application Forms",
    body: "Create application forms with multiple fields tailored to your specific needs. Collect all the necessary information from your applicants.",
  },
  {
    title: "Seamless Application Submission",
    body: "Provide a user-friendly and seamless application submission process. Make it easy for applicants to submit their applications without any hassle.",
  },
  {
    title: "Workflow Management",
    body: "Streamline your application review process with workflow management for engineers. Assign and track applications through different stages, from initial review to final decision.",
  },
  {
    title: "Flexible Application Stages",
    body: "Customize your application stages to match your unique requirements. Include stages such as payment, signatures, validation, and more. Define the order and conditions for each stage.",
  },
  {
    title: "Admin Controls",
    body: "Take full control of your application processes with admin controls. Customize and configure the application workflow according to your business needs. Set permissions and access levels for different users.",
  },
  {
    title: "File Management",
    body: "Associate documents and files with applications seamlessly. Keep all relevant files organized and easily accessible. Upload, view, and manage files associated with each application.",
  },
];

const benefits = [
  {
    title: "Boost Productivity",
    body: "With our application, you can kiss goodbye to manual paperwork and cumbersome processes. Say hello to increased efficiency as you automate repetitive tasks, allowing your team to focus on more valuable work. Our intuitive platform streamlines the application process, helping you handle applications with ease and speed.",
  },
  {
    title: "Streamlined Workflow",
    body: "Our platform offers a simplified and streamlined workflow for both applicants and engineers. From submission to review, each step of the process is seamlessly integrated, ensuring a hassle-free experience for all parties involved. Spend less time navigating complex procedures and more time making progress.",
  },
  {
    title: "Enhanced Accuracy",
    body: "Ensure accuracy and compliance with our standardized processes. By centralizing your application workflow on our platform, you can maintain consistency and accuracy throughout the entire process. Say goodbye to errors and compliance headaches, and hello to peace of mind.",
  },
  {
    title: "Save Time and Money",
    body: "Experience significant time and cost savings with our automation and customization features. By automating repetitive tasks and streamlining workflows, you'll reduce the time and resources spent on manual processes. Plus, our customizable platform allows you to tailor the application process to your specific needs, maximizing efficiency and minimizing costs.",
  },
];

const testimonials = [
  {
    name: "Jane Smith",
    title: "HR Manager",
    body: "We've been using Reformjs for several months now, and it has transformed our workflow. The customizable features allow us to tailor the application process to our specific needs, while the automated tasks have saved us countless hours. Thank you for such a game-changing solution!",
    img: "/testimony-f-1.jpg",
  },
  {
    name: "John Doe",
    title: "CEO",
    body: "Since implementing Reformjs, our application process has become significantly more efficient. Our team can now handle applications with ease, and our applicants appreciate the streamlined experience. Highly recommended!",
    img: "/testimony-m-1.jpg",
  },
  {
    name: "Tom Johnson",
    title: "Operations Director",
    body: "I can't imagine going back to our old manual application process after experiencing the benefits of Reformjs. Not only has it saved us time and money, but it has also improved accuracy and compliance across the board. Our team loves it!",
    img: "/testimony-m-2.jpg",
  },
  {
    name: "Mark Taylor",
    title: "Designer",
    body: "We were initially hesitant to switch to a new application platform, but Reformjs exceeded our expectations. The support team was incredibly helpful during the onboarding process, and the platform itself has revolutionized how we handle applications. I highly recommend it to anyone looking to streamline their processes.",
    img: "/testimony-m-3.jpg",
  },
  {
    name: "Sarah Brown",
    title: "Founder",
    body: "As a startup, efficiency is key to our success, and Reformjs has been instrumental in helping us achieve that. The intuitive interface and customizable workflows make managing applications a breeze, allowing us to focus on growing our business. We couldn't be happier with the results!",
    img: "/testimony-f-2.jpg",
  },
  {
    name: "Emily Rodriguez",
    title: "Head of Recruitment",
    body: "Our recruitment team has been using Reformjs for over a year now, and it has been a game-changer for us. The customizable forms and workflows have allowed us to tailor the application process to each position, resulting in a more efficient and effective hiring process.",
    img: "/testimony-f-3.jpg",
  },
];

export function Landing() {
  return (
    <>
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-48 border-b">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Streamline Your Application Process with Reformjs.
              </h2>
              <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Reformjs is a powerful and customizable platform designed to
                streamline the application process for businesses and
                organizations of all sizes. With our intuitive interface and
                robust features, we empower administrators to create tailored
                application forms with ease, while providing applicants with a
                seamless and efficient submission experience.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2 text-center">
              <Link
                href="/auth/signin"
                className="w-full bg-primary flex p-2 justify-center items-center text-primary-foreground"
              >
                Register
              </Link>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="w-full border-b py-7">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl text-center py-8 md:py-12 lg:py-20">
            Key Features
          </h3>
          <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            {keyFeatures.map(({ title, body }) => {
              return (
                <>
                  <Card
                    key={title}
                    className="bg-opacity-90 backdrop-filter backdrop-blur-md bg-secondary rounded-lg p-4 border border-slate-500 grid gap-4 h-full"
                  >
                    <CardHeader className="p-1">
                      <CardTitle className="text-lg font-bold">
                        {title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-1">
                      <p className="text-sm text-gray-500 dark:text-gray-400 break-all">
                        {body}
                      </p>
                    </CardContent>
                  </Card>
                </>
              );
            })}
          </div>
        </section>
        <section className="w-full border-b py-7">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl text-center py-8 md:py-12 lg:py-20">
            Benefits
          </h3>
          <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2">
            {benefits.map(({ title, body }) => {
              return (
                <>
                  <Card
                    key={title}
                    className="bg-opacity-90 backdrop-filter backdrop-blur-md bg-secondary rounded-lg p-4 border border-slate-500 grid gap-4 h-full"
                  >
                    <CardHeader className="p-1">
                      <CardTitle className="text-lg font-bold">
                        {title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-1">
                      <p className="text-sm text-gray-500 dark:text-gray-400 break-all">
                        {body}
                      </p>
                    </CardContent>
                  </Card>
                </>
              );
            })}
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Happy Customers
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                “The customer service I received was exceptional. The support
                team went above and beyond to address my concerns.“
              </p>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              {testimonials.map(({ name, title, body, img }) => {
                return (
                  <Card
                    key={name}
                    className="bg-opacity-90 backdrop-filter backdrop-blur-md bg-secondary rounded-lg p-4 border border-slate-500 mx-auto flex flex-col items-center justify-start space-y-2 h-full"
                  >
                    <CardHeader className="p-1">
                      <Image
                        alt="User"
                        className="rounded-full object-cover"
                        height="150"
                        src={img}
                        style={{
                          aspectRatio: "150/150",
                          objectFit: "cover",
                        }}
                        width="150"
                      />
                    </CardHeader>
                    <CardContent className="p-1">
                      <p className="text-sm text-gray-500 dark:text-gray-400 break-all">
                        {body}
                      </p>
                    </CardContent>
                    <CardFooter className="flex flex-col items-center justify-center space-y-2">
                      <div className="font-semibold">{name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {title}
                      </div>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
