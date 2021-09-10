import React from "react";
import * as S from './styled'

function Profile() {
    return(
        <S.Wrapper>
            <S.WrapperIMG src="https://avatars.githubusercontent.com/u/65501165?v=4" alt="perfil"/>
            <S.WrapperInfoUser>
              <div>
                  <h1>Felipe Ferreira</h1>
                  <S.WrapperUserName>
                      <h3>Username: </h3>
                      <span>felipeferreirass</span>
                  </S.WrapperUserName>
              </div>
            <S.WrapperStatusCount>
              <div>
                <h4>Followers</h4>
                <span>60</span>
              </div>
              <div>
                <h4>Starreds</h4>
                <span>24</span>
              </div>
              <div>
                <h4>Followings</h4>
                <span>60</span>
              </div>
            </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
        
    )
}

export default Profile