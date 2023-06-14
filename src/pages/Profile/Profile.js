import React, { useState }  from "react"; 
import { ProfileInfo, ProfileHighLights , Navigation , ContentWall, Header } from "../../components";
import { Navigate } from "react-router-dom";

export const Profile = () => {

const [auth,setAuth] = useState(false);

    function handleSignUp(userData) {
        localStorage.setItem("user", JSON.stringify(userData));
        setAuth(true);
    }

if (!auth) {
    return <Navigate to={"signup"} />
}
    return (    
        <div>
            <Header onSignUp={handleSignUp}/>
            <ProfileInfo />
            <ProfileHighLights />
            <Navigation />
            <ContentWall />
        </div>)



};
