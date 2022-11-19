import React, { HTMLAttributes } from 'react'
import classNames from 'src/utils/className'
import Sidebar from './Sidebar'
import Suggestion from './Suggestion'



interface LayoutHomeProps extends HTMLAttributes<HTMLDivElement>{
  children:React.ReactNode
}
const AppLayout = ({children,className=""}:LayoutHomeProps) => {
  return (
    <div className={classNames(' max-h-screen layout-container flex',className)}>
      <div className='w-[20%] relative'>
        <Sidebar/>
      </div>
       <main className='w-[50%]'>
        {children}
       </main>
        <div className='w-[30%]'>
         <Suggestion/>
        </div>
      </div>
  )
}

export default AppLayout