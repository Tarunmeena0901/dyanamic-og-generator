
import { useState } from "react";
import { LinkPreview } from "../components/LinkPreview";
import { PostCard } from "../components/PostCard";

export function PostPage() {
    const [generatedUrl, setGeneratedUrl] = useState<string>("");

    return (
        <div className="w-screen min-h-screen border-2   border-rose-300 ">
        <div className="mt-[20vh] flex flex-col gap-8 justify-center items-center  p-[20vh]">
            <PostCard generatedUrl={generatedUrl} setGeneratedUrl={setGeneratedUrl} />
            {generatedUrl && <LinkPreview url={generatedUrl} />}
        </div>
        </div>
    );
}
