import { useFetchHTML } from "../hooks/useFetchHtml";

export function LinkPreview({ url }: { url: string }) {
    const generatedHtml = useFetchHTML(url);
    console.log("url herer",generatedHtml)
    return (
        <div className="h-[60vh] w-[80vh] ">
            <div dangerouslySetInnerHTML={{ __html: generatedHtml }}></div>
        </div>
    );
}
