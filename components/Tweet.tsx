import { ITweet } from "interfaces/ITweet"

type TweetProps = {
    tweet: ITweet
}

export const Tweet = ({ tweet }: TweetProps) => {
    return <p>{tweet.content}</p>
}