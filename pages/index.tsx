import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';


const App: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === 'loading') return null;

  if (session) {
    router.push('/home');
    
  }

  return (
    <div className={"text-teal-600 text-3xl"}>
      <a href='/api/auth/signin'>Sign In !!!! </a>
    </div>
  )
}

export default App
