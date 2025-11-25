import React from 'react'

export const FormControlled = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
        <div className='w-full max-w-md bg-white p-6 rounded-2xl shadow-lg'>
            <h1 className='text-2xl font-semibold text-center text-gray-800 mb-6'>Registar Form</h1>
            <form  className='space-y-4'>
                <input type="text"
                placeholder='UserName'
                className='w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500' 
                 />
                  <input type="number" 
                 name="phone" placeholder='phone'
                 className='w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'  />
                 <input type="email"
                 placeholder='Email'
                 className='w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400'  />
                
                 <input type="password" name="password" placeholder='Password'
                 className='w-full p-3 border border-gray-200 rounded-xl 
                 focus:outline-none focus:ring-2 focus:ring-blue-500'  />
                 <div className='flex items-center gap-2'>
                    <input type="checkbox" name="checked" 
                    className='h-4 w-4 ' 
                     />   
                    <span className='text-sm'>Accept Terms & conditions </span>              
                    
                </div>
                <select name="selectOptions"
                className='w-full p-3 border border-gray-200  rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400' >
                    <option value="">Select Skills</option>
                    <option value="react">React</option>
                    <option value="node">Node</option>

                </select>


            </form>
        </div>
    </div>
  )
}
