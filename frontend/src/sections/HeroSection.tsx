import { useState } from "react";
import { GradeintCardContainer } from "../components/GradientCardContainer";
import { LinkPreview } from "../components/LinkPreview";
import { PostCard } from "../components/PostCard";

export function HeroSection() {
    const [generatedUrl, setGeneratedUrl] = useState<string>("");
    return (
        <div className="px-[20vh] w-screen bg-black text-white">
            <div className="h-screen flex flex-col items-center gap-8">
                <div className="h-1/4 w-full flex flex-col justify-center items-center gap-4 items-center">
                    <div className="overflow text-6xl font-bold bg-gradient-to-r from-green-500  to-indigo-400 bg-clip-text text-transparent">
                        Generate OG Post
                    </div>
                    <div className="text-lg w-2/5 text-center font-semibold ">
                        Dynamically generates an Open Graph based on the post content.
                    </div>
                </div>
                <div className="h-3/4 w-full flex justify-around items-center ">
                    <div className="w-1/2 h-full flex flex-col gap-4 items-center px-5">
                        <span className="text-lg font-semibold">Generate Link </span>
                        <GradeintCardContainer>
                            <PostCard generatedUrl={generatedUrl} setGeneratedUrl={setGeneratedUrl} />
                        </GradeintCardContainer>
                    </div>
                    <div className="w-1/2 h-full flex flex-col gap-4 items-center px-5 border-l-2 border-dashed border-neutral-500 ">
                        <span className="text-lg font-semibold">Post Preview </span>
                        <LinkPreview url={generatedUrl} />
                    </div>
                </div>
            </div>
        </div>
    )
}