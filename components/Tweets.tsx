import { ITweet } from "interfaces/ITweet";
import { Tweet } from "./Tweet";

type TweetsProps = {
    tweets: ITweet[]
}

export const Tweets = ({ tweets }: TweetsProps) => {

    if (!tweets) return null;

    return (
        <>
            {tweets.map((tweet, index) => (
                <Tweet key={index} tweet={tweet} />
            ))}
        </>
    )
}
