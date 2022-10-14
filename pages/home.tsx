import { NextPage } from "next"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router";
import { NewTweet, Tweets } from "components";
import client from "lib/prismadb";
import { getTweets } from "lib/data";
import { ITweet } from "interfaces/ITweet";

type HomeProps = {
    tweets: ITweet[];
}

const Home: NextPage<HomeProps> = ({ tweets }) => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const loading = status === "loading";

    if (loading) return null;

    if (!session) router.push('/')

    return (
        <>
            <NewTweet />
            <Tweets tweets={tweets} />
        </>
    )
}
export default Home;

export async function getStaticProps() {
    let tweets = await getTweets(client);
    tweets = JSON.parse(JSON.stringify(tweets));
    return {
        props: {
            tweets,
        }
    }
}