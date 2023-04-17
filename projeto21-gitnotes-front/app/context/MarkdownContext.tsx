import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useUser } from "./UserContext";

export const MarkdownContext = createContext({
    markdownFiles: [],
    getMarkdownFiles: () => {},
    getMarkdownFileByName: (name: string) => null,
});

export const MarkdownProvider = (props: any) => {
    const [markdownFiles, setMarkdownFiles] = useState([]);

    function getMarkdownFiles() {

        const accessToken = localStorage.getItem('accessToken');
        const fetchMarkdownFiles = async () => {
            try {
                const response = await axios.get('http://localhost:4000/markdown/list', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                setMarkdownFiles(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        if (accessToken) {
            fetchMarkdownFiles();
        }
    }

    function getMarkdownFileByName(name: string) {
        return markdownFiles.find((file: any) => file.name === name) || null;
    }

    useEffect(() => {
        getMarkdownFiles();
    }, [])

    return (
        <MarkdownContext.Provider value={{ markdownFiles, getMarkdownFiles, getMarkdownFileByName }}>
            {props.children}
        </MarkdownContext.Provider>
    );
};