import axios from "axios";
import { useContext, useState } from "react";
import { MarkdownContext } from "~/context/MarkdownContext";

export default function RepoHandler() {
    const [gitToken, setGitToken] = useState('');
    const [owner, setOwner] = useState('');
    const [repo, setRepo] = useState('');
    const { getMarkdownFiles } = useContext(MarkdownContext);

    async function handleSubmit(e: any) {
        e.preventDefault();
        const accessToken = localStorage.getItem('accessToken');
        try {
            const response = await axios.post('http://localhost:4000/markdown/fetch', {
                accessToken: gitToken,
                owner,
                repo
            },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    },
                }
            )
            getMarkdownFiles();
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="w-60 h-96 bg-white rounded-lg flex flex-col box-border">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 flex flex-col">
                <label>
                    Access Token from GitHub:
                    <input type="text" value={gitToken} onChange={(e) => setGitToken(e.target.value)} />
                </label>
                <label>
                    Owner:
                    <input type="text" value={owner} onChange={(e) => setOwner(e.target.value)} />
                </label>
                <label>
                    Repo:
                    <input type="text" value={repo} onChange={(e) => setRepo(e.target.value)} />
                </label>
                <button type="submit">Add Repo</button>
            </form>
        </div>
    )
};
