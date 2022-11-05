import { api } from './services/api'
import { useQuery } from 'react-query'
import { repoProps, userProps } from './types'

function App() {
  const { data: user } = useQuery<userProps>('personal info', async () => {
    const response = await api.get('users/hxsggsz')
    return response.data
  }, {
    staleTime: Infinity
  })

  const { data: repo } = useQuery<repoProps[]>('repos', async () => {
    const response = await api.get<repoProps[]>('users/hxsggsz/repos')
    return response.data
  }, {
    staleTime: 1000 * 60
  })

  return (
    <div className='flex flex-row w-full bg-gray-background max-md:flex-row max-sm:flex-col justify-center'>

      <div className='m-8 max-sm:flex justify-center flex-col items-center'>
        <img className='w-64 h-64 rounded-full' src={user?.avatar_url} alt='' />

        <div className='text-white w-96 max-sm:flex justify-center flex-col items-center'>
          <div className='py-10'>
            <a href={user?.html_url}>
              <p className='font-semibold text-2xl'>{user?.name}</p>
              <span className='text-gray-400 text-xl'>{user?.login}</span>
            </a>
          </div>

          <p className='text-xl'>{user?.bio}</p>
        </div>

      </div>
    
      <main className='m-8 w-screen divide-y divide-gray-900 text-white max-md: max-sm:w-auto'>

        <div className='mt-8 py-10 divide-y divide-gray-900 flex flex-col'>

          <div className='mb-4'>

            <ul>
              {repo?.map(items => (
                <li key={items.name} className='border-y border-spacing-96 border-gray-800'>
                  <div className='m-2 p-4'>
                    <h1 className='text-blue-400 text-lg font-semibold hover:underline '><a target='_blank' href={items.html_url}>{items.name}</a></h1>

                    <span className='divide-y text-gray-400'>{items.language}</span>
                  </div>
                </li>
              ))}
            </ul>
        
          </div>
          
        </div>
      
      </main>

    </div>
  )
}

export default App
