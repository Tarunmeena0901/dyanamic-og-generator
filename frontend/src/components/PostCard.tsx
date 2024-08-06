import { useState } from 'react';
import { InputField } from './InputField';
import { UrlPreview } from './UrlPreview';

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
        <div className="relative inset-2 h-[60vh] w-[60vh] bg-white flex flex-col justify-between items-center px-4 py-6 border-2 border-neutral-300 rounded-lg">
            <form className='w-full flex flex-col items-center gap-4'>
                <InputField
                    placeholder='Title'
                    value={title}
                    onInputChange={setTitle}
                />
                <InputField
                    placeholder="Description"
                    value={description}
                    onInputChange={setDescription}
                />
                <InputField
                    placeholder="Image URL (1200x630)"
                    value={imageUrl}
                    onInputChange={setImageUrl}
                />
            </form>
            <UrlPreview generatedUrl={generatedUrl} />
            <button
                onClick={handleSubmit}
                className='w-1/2 h-10 bg-black text-white rounded-lg'
            >
                Generate url
            </button>
        </div>
    );
}
