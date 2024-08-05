import { useState } from 'react';

export function PostCard({ generatedUrl, setGeneratedUrl }: {
    generatedUrl: string,
    setGeneratedUrl: React.Dispatch<React.SetStateAction<string>>
}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description, imageUrl }),
        });
        const data = await response.json();
        setGeneratedUrl(data.generatedUrl);
    };

    return (
        <div className="h-[50vh] w-[100vh] flex flex-col justify-between items-center px-4 py-6 border-2 border-black">
            <div className='w-3/4 flex flex-col items-center gap-6'>
                <form className='w-full flex flex-col items-center gap-4'>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        className=''
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Image URL (1200x630)"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </form>
                <button
                    onClick={handleSubmit}
                    className='w-1/2 h-10 bg-black text-white'
                >
                    Generate url
                </button>
            </div>
            {generatedUrl && (
                <div className='w-2/3 p-2 flex flex-col justify-between items-center border-2 border-black'>
                    <div className='w-full flex justify-between items-center'>
                        <span>Generated URL:</span>
                        <button
                            onClick={() => navigator.clipboard.writeText(generatedUrl)}
                            className="px-2 py-1 border-2 border-black rounded-lg text-blue-500 hover:bg-black hover:text-white transition-colors duration-100"
                        >
                            Copy
                        </button>
                    </div>
                    <p className="block w-full line-clamp-2" >
                        {generatedUrl}
                    </p>
                </div>
            )}
        </div>
    );
}
