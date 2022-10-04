import { useSession } from "next-auth/react"
import { FormEvent, useState } from "react";


const NewTweet: React.FC = () => {
    const { data: session } = useSession();
    const [content, setContent] = useState<string>();


    if (!session) return null;

    const handleChange = ({ currentTarget }: FormEvent<HTMLTextAreaElement>) => {
        const { value } = currentTarget;
        setContent(value);

    }
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!content) {
            alert('No content');
            return;
        }
        
        setContent('');
        await fetch('/api/tweet', {
            body: JSON.stringify({
                content,
            }),
            headers: {
                'Content-type': 'application/json',
            },
            method: 'POST',
        }).then();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex'>
                <div className='flex-1 px-1 pt-2 mt-2 mr-1 ml-1'>
                    <textarea
                        className='border p-4 w-full text-lg font-medium bg-transparent outline-none color-primary '
                        rows={2}
                        cols={50}
                        placeholder="What's happening?"
                        name='content'
                        value={content}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className='flex'>
                <div className='flex-1 mb-5'>
                    <button className='border float-right px-8 py-2 mt-0 mr-2 font-bold rounded-full'>
                        Tweet
                    </button>
                </div>
            </div>
        </form>
    )
}

export default NewTweet