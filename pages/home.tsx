import { NextPage } from "next"
import { useSession } from "next-auth/react"

const Home: NextPage = () => {
    const { data: session, status } = useSession();
    return (
        <div>
            {session ? <p> Logged in !</p> : <p>Not  logged in </p>}
        </div>
    )
}
export default Home;