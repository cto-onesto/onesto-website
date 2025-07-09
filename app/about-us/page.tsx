import { Metadata } from "next"
import { TeamCard } from "@/components/team-card"
import { AnimatedImages } from "@/components/animated-images"

export const metadata: Metadata = {
  title: "About Us | Onesto",
  description:
    "Meet the team behind Onesto, a platform dedicated to improving financial well-being for employees and employers.",
}

const boardMembers = [
  {
    name: "Ben Silluzio",
    role: "CEO – Director",
    description:
      "Dual MBAs from Columbia Business School and London Business School. 25+ year career in funds management & investment banking.",
    imageUrl: "/team/bens.png",
  },
  {
    name: "Clark Kirby",
    role: "Director",
    description:
      "CEO of Village Roadshow. Director of Gold Tourism Corporation, Chairman of Village Cinemas Australia.",
    imageUrl: "/team/clark-kirby.png",
  },
  {
    name: "Dr Marcus Tierney",
    role: "Director",
    description:
      "Former PWC partner for innovation and Government R&D incentive programs. Currently CEO of CO2 Australia. Director Mitchell Asset Management, Chair of Commercialization Advisory Board and Non-Exec Director of St Vincent’s Institute.",
    imageUrl: "/team/marcus.png",
  },
]

const advisoryBoard = [
  {
    name: "Prof. Paul Johnson",
    role: "Advisor",
    description:
      "Runs Nicusa Investment Advisors. 25 year professor at Columbia Business School. Senior Research Advisor for FinTech Think Tank USA.",
    imageUrl: "/team/paulj.png",
  },
  {
    name: "Andrew Barlow",
    role: "Advisor",
    description:
      "Founder of Adslot Ltd. Director of Nitro Software. Co-Founder of Hitwise, which was sold to Experian Group in May 2007.",
    imageUrl: "/team/andrewb.png",
  },
  {
    name: "Adrian Giles",
    role: "Advisor",
    description:
      "Co-Founder of Fortress Esports. Director of PE fund Yarra Ventures. Co-founder Hitwise sold to Experian. Co-founder at Sinewave Interactive.",
    imageUrl: "/team/adriang.png",
  },
  {
    name: "Prof. Sandra Matz",
    role: "Advisor",
    description:
      "Associate Professor of Business at Columbia Business School. Data IQ’s most influential people.",
    imageUrl: "/team/sandram.png",
  },
  {
    name: "Saul Cannon",
    role: "Advisor",
    description:
      "CEO of Port of Melbourne and former CFO of Toll Group Ltd. Former Director, Strategy and Corporate Development at Asciano.",
    imageUrl: "/team/saulc.png",
  },
]

// const onestoTeam = [
//   {
//     name: "Dallas Fett",
//     role: "Head of IT",
//     description:
//       "18+ years’ experience in IT and partnerships with HR and Payroll software businesses.",
//     imageUrl: "/team/dallasf.png",
//   },
//   {
//     name: "Dhruv Oberoi",
//     role: "CTO",
//     description:
//       "Dhruv holds a Masters of Engineering from La Trobe University. He has 10+ years’ experience building technology applications.",
//     imageUrl: "/testimonials/Dhruv-Oberoi.png",
//   },
//   {
//     name: "Glenn McDermott",
//     role: "Head of EVP Solutions",
//     description:
//       "Glenn holds a Bachelor of Business HR from Victoria University. Glenn has 20+ years’ experience in HR, specially, remuneration and Benefits, EVP, coaching & organisational development.",
//     imageUrl: "/testimonials/Glenn-McDermott.png",
//   },
//   {
//     name: "Adlina Zatalini",
//     role: "Business Analyst",
//     description:
//       "Adlina holds a Masters of Data Science from Monash University and a Bachelor of Enginnering (Honours).",
//     imageUrl: "/testimonials/Adlina-Zatalini.png",
//   },
//   {
//     name: "Naduni Jayasundara",
//     role: "BA/Auditor",
//     description:
//       "Naduni is a former auditor at KPMG and holds a Masters Degree in Information Systems from CQ University.",
//     imageUrl: "/testimonials/Naduni-Jayasundara.png",
//   },
//   {
//     name: "Andy Hart",
//     role: "Activation Specialist",
//     description:
//       "10 years in the CRM and Growth space, driving acquisition, retention, and monetisation growth for companies in the SaaS, B2C, Financial Services and Media industries.",
//     imageUrl: "/testimonials/Andy-Hart.png",
//   },
//   {
//     name: "Carlos Castillo",
//     role: "BA/ Project Manager",
//     description:
//       "Carlos is a former IBM BA and has 10+ years’ tech experience and holds a Master of Data Science, Info Tech from RMIT University.",
//     imageUrl: "/testimonials/Carlos-Castillo.png",
//   },
//   {
//     name: "Katrina Wang",
//     role: "Front-End Dev",
//     description:
//       "Katrina is a UI designer and robotics teacher who holds a Master’s degree in Information Technology from Monash University.",
//     imageUrl: "/testimonials/Katrina-Wang.png",
//   },
// ]

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      <main className="isolate">
        <div className="relative isolate -z-10">
          <div className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48">
            <svg
              viewBox="0 0 801 1036"
              aria-hidden="true"
              className="w-[50.0625rem]"
            >
              <path
                fill="url(#70656b7e-db44-4b9b-b7d2-1f06791bed52)"
                fillOpacity=".3"
                d="m282.279 843.371 32.285 192.28-313.215-210.722 192.28-32.286 121.442-32.286-192.28 32.286-32.285-192.28 313.215 210.722-192.28 32.286Z"
              />
              <defs>
                <linearGradient
                  id="70656b7e-db44-4b9b-b7d2-1f06791bed52"
                  x1="508.179"
                  x2="-28.67"
                  y1="255.321"
                  y2="92a.371"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    About Us
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    The Onesto Team has created a platform that gives employees
                    access to their earnings, shopping discounts, rewards, and
                    financial education in real-time. Now money moves faster
                    and smoother, and benefits each participant equally. Onesto
                    is the first company to offer such a solution, and we are
                    thrilled to be able to provide this valuable service to
                    employees and employers alike. We believe that our platform
                    will have a profound impact on the way people manage their
                    finances, and we are committed to making it as
                    user-friendly and accessible as possible. We hope that you
                    will take advantage of our platform, and we look forward to
                    helping you improve your financial well-being.
                  </p>
                </div>
                <AnimatedImages />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Board
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {boardMembers.map((person) => (
              <TeamCard key={person.name} {...person} />
            ))}
          </ul>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Advisory Board
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {advisoryBoard.map((person) => (
              <TeamCard key={person.name} {...person} />
            ))}
          </ul>
        </div>

        {/* <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Onesto Team
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          >
            {onestoTeam.map((person) => (
              <TeamCard key={person.name} {...person} />
            ))}
          </ul>
        </div> */}
      </main>
    </div>
  )
}
