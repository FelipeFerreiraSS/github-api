import React, { createContext, useState } from "react";


export const GithubContext = createContext({
    user:{},
    repositories:[],
    starred: [],
})

function GithubProvider({children}) {
    const [githubState, setGithubState] = useState({
        user: {
            login: user.login,
            name: "Felipe Ferreira",
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0
        },
        repositories:[],
        starred: [],

    })

    const contextValue = {
        githubState,
    }

    return(
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubProvider