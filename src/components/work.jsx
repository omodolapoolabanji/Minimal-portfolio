export default function Work({style}){

    const styles = {borderLeft: 'solid thin'}

    const workHistory = [{name: 'Ascend Indiana', position: 'Software QA Engineer Intern', duration: 'June 2024 - August 2024', concepts: ['TypeScript', 'Playwright', 'Regression Testing']}, {name: 'GBSC Group', position: 'Backend Engineer Intern', duration: 'March 2024 - June 2024', concepts: ['Python', 'Django', 'MySQL', ]}, {name: 'Indiana University Bloomington', position: 'Undergraduate Instructor for I101', duration: 'August 2023 - Present', concepts: ['Python', 'HTML', 'CSS','Data Visualization and Aggregation' ]}]

    // const listStyle = {listStyleType: '⮑'}
    return(<div className="flex-col justify-center align-center mx-auto mt-3 " style={style}>
        <h2 className="font-bold text-lg">Work History</h2>
        <hr className="my-3"/>
        <div className="text-sm">
            {workHistory.map((e)=>(
                <div style={styles} className="mb-2 ps-2">
                <div className="flex flex-col md:flex-row justify-between">
                <h4 className="font-bold">{e.position} @ {e.name}</h4>  <p>{e.duration}</p></div>

                
                <div className="mt-2" >
                    <ul className="custom-list" >
                    {e.concepts.map((concepts)=>(
                        <li className="">{concepts}</li>
                    ))}</ul>
                </div>
                </div>



            ))}
        </div>

    </div>)
}