import React from "react";
import { Wrapper } from './styled'

function Profile() {
    return(
        <Wrapper>
            <div>
            <img src="https://avatars.githubusercontent.com/u/65501165?v=4" alt="perfil"/>
            <div>
                <h1>Felipe Ferreira</h1>
                <Wrapper>
                    <h3>Username: </h3>
                    <span>felipeferreirass</span>
                </Wrapper>
            </div>
            <Wrapper>
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
            </Wrapper>
            </div>
        </Wrapper>
        
    )
}

export default Profile