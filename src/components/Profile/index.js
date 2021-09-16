import React from "react";
import useGithub from "../hooks/github-hooks";
import * as S from './styled'

function Profile() {

  const { githubState } = useGithub()

    return(
        <S.Wrapper>
            <S.WrapperIMG src="https://avatars.githubusercontent.com/u/65501165?v=4" alt="perfil"/>
            <S.WrapperInfoUser>
              <div>
                  <h1>{githubState.user.name}</h1>
                  <S.WrapperUserName>
                      <h3>Username: </h3>
                      <span>{githubState.user.login}</span>
                  </S.WrapperUserName>
              </div>
            <S.WrapperStatusCount>
              <div>
                <h4>Followers</h4>
                <span>{githubState.user.followers}</span>
              </div>
              <div>
                <h4>Followings</h4>
                <span>{githubState.user.following}</span>
              </div>
              <div>
                <h4>Gits</h4>
                <span>{githubState.user.public_gists}</span>
              </div>
              <div>
                <h4>repos</h4>
                <span>{githubState.user.public_repos}</span>
              </div>
            </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
        
    )
}

export default Profile