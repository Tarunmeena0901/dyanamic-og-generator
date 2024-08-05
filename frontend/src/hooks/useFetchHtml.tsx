import { useState, useEffect } from "react";

export function useFetchHTML(url: string) {
    const [html, setHtml] = useState<string>("");

    useEffect(() => {
        if (url) {
            const fetchHTML = async () => {
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'text/plain',
                        }
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    const htmlString = await response.text();
                    setHtml(htmlString);
                } catch (error) {
                    console.error("Failed to fetch HTML:", error);
                }
            };

            fetchHTML();
        }
    }, [url]);

    return html;
}
