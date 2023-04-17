import { Link, useNavigate } from "@remix-run/react";
import { useContext, useEffect, useState } from "react";
import RepoHandler from "~/components/RepoHandler";
import TopBar from "~/components/TopBar";
import View from "~/components/View";
import { MarkdownContext, MarkdownProvider } from "~/context/MarkdownContext";
import { useUser } from "~/context/UserContext";
import MarkdownPage from "../markdown";

export default function Dashboard() {
    const { markdownFiles } = useContext(MarkdownContext);
    const [fileDisplay, setFileDisplay] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            navigate('/');
        }
        console.log(markdownFiles);
    }, [])

    function handleClick(file: any) {
        setFileDisplay(file);
        console.log(file);
    }

    return (
        <>
            <TopBar />
            <View>
                {markdownFiles.length === 0 &&
                    <RepoHandler />
                }
                {markdownFiles.length !== 0 &&
                    <div className="w-60 h-96 bg-white rounded-lg flex flex-col justify-center items-center box-border">
                        <h2 className="mb-6 font-medium">Files List</h2>
                        <ul>
                            {markdownFiles.map((file: any) => (
                                <li key={file.name} className="mb-2" onClick={() => handleClick(file)} >
                                    {file.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                }
                {Object.keys(fileDisplay).length === 0 && 
                    <MarkdownPage fileDisplay={fileDisplay} />
                }

            </View>
        </>
    )
}