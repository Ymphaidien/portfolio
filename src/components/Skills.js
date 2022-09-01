import React, { Fragment } from 'react'
import  { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid"
import { skills } from "../data"


export default function Skills() {
    const title = "Programming Languages"

    // const items = skills.filter( item => item.title === "Programming Languages").map(  x => x.list )
    // console.log(items)

    return (
    <section id="skills">
        <div className='container px-5 py-10 mx-auto'>
            <div className='text-center mb-20'>
                <ChipIcon className="w-10 inline-block mb-4" />
                <h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-4'>
                    Skills &amp; Technologies
                </h1>
                <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
                    Skills are sorted with respect to proficiency!
                </p>
            </div>

            <div className=''>
                <div className='flex flex-wrap lg:w-full sm:mx-auto sm:mb-2 ' >
                    <SkillAndTech   title={"Languages"} 
                                            items={ skills.filter( item => item.title === "Programming Languages").map(x => x.list) }
                                            />

                    <SkillAndTech   title={"Web Development"} 
                                            items={ skills.filter( item => item.title === "Web Development").map(x => x.list) } />

                    <SkillAndTech   title={"Databases"} 
                                            items={ skills.filter( item => item.title === "Databases").map(x => x.list) } />

                    <SkillAndTech   title={"Technologies"} 
                                            items={ skills.filter( item => item.title === "Technologies").map(x => x.list) } />

                    <SkillAndTech   title={"Skills"} 
                                            items={ skills.filter( item => item.title === "Skills").map(x => x.list) } />
                </div>
            </div>
        </div>
    </section>
    )
}

function SkillAndTech({ title, items }) {
    return(
        <div className=' mx-3 px-3'>
            <div className='title-font font-medium text-white mx-5 p-5' > {title}</div>
            <div className=' '>
                { 
                    items[0].map( (item, i) => (
                        <div key='item' className=' rounded flex h-full p-3'  >
                            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0" />
                            <span className="ml-3">
                                {item}
                            </span>
                        </div>
                        
                    ))
                }
            </div>
        </div>
        
    );
}