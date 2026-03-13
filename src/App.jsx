import React from 'react'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import FormValidition from './components/FormValidition';


const App = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      
      {/* Header */}
      <header className='bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>
            
            {/* Logo */}
            <div className='flex items-center'>
              <div className='w-10 h-10 bg-blue-600 text-white rounded-lg 
              flex items-center justify-center text-xl font-bold'>
                F
              </div>
              <div className='ml-3'>
                <h1 className='text-xl font-bold text-blue-800'>FormApp</h1>
                <p className='text-x5 text-gray-500'>Simple FormValidation</p>

              </div>
            </div>
            
            {/* right icone  */}
            <div className='flex items-center space-x-4'>
              <span className='text-xl cursor-pointer' >🔔</span>
              <div className='flex items-center space-x-2'>
                <div className='w-8 h-8 bg-blue-500 rounded-full'></div>
                <span className='hidden md:block font-medium'>john doe</span>
              </div>

            </div>

          </div>
        </div>
      </header>

      {/* body */}
      <div className='flex flex-1'>
            <Sidebar/>
      {/* main content */}
      <main className='flex-1 p-4 lg:p-8'>
        <div className='max-w-4xl mx-auto'>
          <FormValidition/>
        </div>
      </main>
      </div>
    <Footer/>
  
      </div>
  
  )
}

export default App;