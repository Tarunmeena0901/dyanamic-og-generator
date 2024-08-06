import { InputField } from "./InputField";

export function UrlPreview({generatedUrl} : {generatedUrl : string}){
    return(
        generatedUrl && (
            <div className='w-2/3 h-[15vh] p-2 flex flex-col justify-between items-center border-2 border-black bg-neutral-900 text-white rounded'>
                <div className='w-full flex justify-between items-center'>
                    <span className="font-semibold">Generated URL:</span>
                    {/* <button
                        onClick={() => navigator.clipboard.writeText(generatedUrl)}
                        className="px-2 py-1 border-2 border-black bg-neutral-800 rounded-lg text-blue-500 hover:bg-black hover:text-white transition-colors duration-100"
                    >
                        Copy
                    </button> */}
                </div>
                <InputField
                    onInputChange={()=>{}}
                    value={generatedUrl}
                    placeholder=""
                />
                {/* <p className="block w-full line-clamp-5 text-sm" >
                    {generatedUrl}
                </p> */}
            </div>
        )
    )
}