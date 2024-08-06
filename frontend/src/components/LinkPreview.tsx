import { useFetchHTML } from "../hooks/useFetchHtml";

export function LinkPreview({ url }: { url: string }) {
    const generatedHtml = useFetchHTML(url);

    return (
        <div className="h-[60vh] w-[80vh] flex border-2 border-neutral-700 rounded-lg overflow-hidden bg-neutral-900">
            <iframe
                title="Preview"
                srcDoc={generatedHtml}
                style={{
                    height: "100%",
                    width: "100%",
                    border: "none"
                }}
            />
        </div>
    );
}
