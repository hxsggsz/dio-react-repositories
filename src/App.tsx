import axios from 'axios'
import { useQuery } from 'react-query'
import foto from '../public/vite.svg'
import { api } from './services/api'

interface userProps {
  bio: string
  name: string
  login: string
  html_url: string
  avatar_url: string
}

interface repoProps {
  name: string
  language: string
  html_url: string
}

function App() {
  const { data: user } = useQuery<userProps>('personal info', async () => {
    const response = await api.get('users/hxsggsz')
    return response.data
  })

  const { data: repo } = useQuery<repoProps[]>('repos', async () => {
    const response = await api.get<repoProps[]>('users/hxsggsz/repos')
    return response.data
  })

  return (
    <div className='flex w-full h-full bg-gray-background'>

      <div className='m-8'>
        <img className='w-64 h-64 rounded-full' src={user?.avatar_url} alt='' />

        <div className='text-white w-96'>
          <div className='py-10'>
            <a href={user?.html_url}>
              <p className='font-semibold text-2xl'>{user?.name}</p>
              <span className='text-gray-400 text-xl'>{user?.login}</span>
            </a>
          </div>

          <p className='text-xl'>{user?.bio}</p>
        </div>

      </div>
    
      <main className='m-8 w-full divide-y divide-gray-900 text-white'>

        <div className='mt-8 py-10 divide-y divide-gray-900 flex flex-col'>

          <div className='mb-4'>

            <ul>
              {repo?.map(items => (
                <li key={items.name} className='border-y border-spacing-96 border-gray-800'>
                  <div className='m-2 p-4'>
                    <h1 className='text-blue-400 text-lg font-semibold hover:underline '><a href={items.html_url}>{items.name}</a></h1>

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
