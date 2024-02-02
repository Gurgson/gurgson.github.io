import { Technlogies } from "../helpers/returnTechIcon"

export enum EProjectTag  {
    fe= "Front-End",
    be= "Back-End",
    fs= "Full-Stack"
}
export type TProjectData = {
    title: string
    technologies: Technlogies[],
    pfp: string,
    createdAt: Date,
    status: "completed" | "ongoing",
    description: string,
    tag: EProjectTag,
    people: number,
    links: {
        github: string,
        live?: string,
        details?: string
    }
}
const projectsList : TProjectData[] = [
    {
        title: "Pod Of Cast",
        technologies: [
            Technlogies.sc,
            Technlogies.react,
            Technlogies.ts,
        ],
        createdAt: new Date("2023 Aug"),
        pfp:"PodOfCast.jpg",
        status: "completed",
        description: "Single-page website for podcast group. My main goal wa to recreate some figma template to simulate \"team work\" with designer and his idea.",
        tag: EProjectTag.fe,
        people: 1,
        links: {    
            github: "https://github.com/Gurgson/daily-podcast",
            live:"https://podofcast.netlify.app/",
            // details: "/project/podofcast"
        }

        
    },
    {
        title: "Remake Studio",
        technologies: [
            Technlogies.tailwind,
            Technlogies.next,
            Technlogies.ts,
            Technlogies.sql,
        ],
        createdAt: new Date("2023 Dec"),
        pfp:"RemakeStudio.jpg",
        status: "completed",
        tag: EProjectTag.fs,
        description:"Multi-page website for studio which remakes old movies. Page contains authorization, small blog and SSR/SSG mechanisms.",
        people: 1,
        links: {
            github: "https://github.com/Gurgson/remake-studio",
            live: "https://remake-studio.netlify.app/",
            // details: "/project/remakestudio"

        },
    },   
    {
        title: "GeoPuzzle - Back-End",
        technologies: [
            Technlogies.node,
            Technlogies.express,
            Technlogies.ts,
            Technlogies.mongo,
        ],
        people:2,
        createdAt: new Date(),
        pfp:"geopuzzle.jpg",
        status: "ongoing",
        tag: EProjectTag.be,
        description:"Reacreational web application where you solve series of riddles, where answear is on the map. My role is to create back-end system.",
        links: {
            github: "https://github.com/Pawlaczenko/geopuzzle",
            // details: "/project/remake"

        }
    },
    {
        title: "P.Electric.pl",
        technologies: [
            Technlogies.js,
            Technlogies.react,

        ],
        people:1 ,
        createdAt: new Date("2023 Jan"),
        pfp:"pele.jpg",
        status:  "completed",
        tag: EProjectTag.fe,
        description:"My first landing page created with React. It's here to show how my web dev skills developed over time. Furthermore, that's the first project I've actually sold to a client.",
        links: {
            github: "https://github.com/Gurgson/P.Electric",
            // details: "/project/pelectric",
            live: "https://pelectric.pl"

        },
    }

]
projectsList.map(item => {
    item.pfp = `/project-covers/${item.pfp}`

})
export default  projectsList