'use client'
export default function Projects({style}){

    const projectStyle = {border: 'solid thin', borderRadius: '5px' , marginBottom: '20px',  }
    const projects = [{name: 'Guitar Shoppe', description: 'Guitar ecommerce store developed with a Springboot backend and React frontend.', techstack: ['redux', 'springboot', 'Java', 'javascript', 'react'], link: 'https://github.com/omodolapoolabanji/GuitarCenterBackend'}, {name: 'Flashcard AI', description: `AI Flashcard web application created using flask and OpenAI's GPT 3.5 and pytesseract's OCR software. `, techstack:['python', 'flask', 'html', 'css', 'openAI', 'pytesseract', 'openCV'] , link: 'https://github.com/omodolapoolabanji/AI-Flashcard' }, {name:'Wordoodle', description: 'Wordle clone created using the unity game engine and c#.', techstack: ['unity', 'c#'], link: 'https://github.com/omodolapoolabanji/Wordoodle'}, {name: 'Truth Table generator',description: 'Truth table generator that parses propositional logic and returns valid truth table values.' , techstack: ['jSwing','java'], link: 'https://github.com/omodolapoolabanji/Truth-Table-Generator-JSwing' },]
    const navigateToLink = (link)=>{
       window.location.href = link
    }

    return (
        <div className="flex-col justify-center align-center mx-auto mt-3 " style={style}>
            <h2 className="font-bold text-lg">Projects</h2>
            <hr className="my-3"/>
            <div className="">
            {projects.map((project)=>(
                <div style={projectStyle} className=" flex-col justify-center align-center mt-2 mx-auto p-3 rounded-md shadow-md  projects bg-gradient-to-r hover:from-pink-400 hover:to-yellow-500"  onClick={()=>navigateToLink(project.link)}  >
                    <h4 className="font-bold text-base">{project.name}</h4>
                    <p>
                        {project.description}
                    </p>
                    <div className="mt-2">
                        <ul style={{fontFamily: '"Lucida Console", "Courier New", "monospace";' }} className="flex flex-col sm:flex-row justify-start text-sm" >
                        {project.techstack.map((tech)=>(
                            <li className="me-2"  >{tech}</li>

                        ))}</ul>
                    </div>

                </div>

            ))}</div>
        </div>
    )
} 