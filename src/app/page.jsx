import Header from '../components/header'
import Work from '../components/work'
import Projects from '@/components/projects'
import './globals.css'

export default function Home() {


    const componentStyle = {width: '40%'  }
    
    const headStyle = {border: 'thin,solid', width: '40%'  }
 return (
  <div className='flex-col'>
    <Header styles ={headStyle}/>
    <Work  style={componentStyle}/>
    <Projects style={componentStyle} />
    <footer style={componentStyle} className=' flex justify-center mx-auto my-3 text-xs'>

    © 2024 Omodolapo Olabanji.
    </footer>
    
  </div>
 )
}
