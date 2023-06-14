import React  from "react"; 
import { ProfileInfo, ProfileHighLights , Navigation , ContentWall, Header } from "../../components";
import { Navigate } from "react-router-dom";

export const Profile = ({ auth }) => {


if (!auth) {
    return <Navigate to={"signup"} />
}else{
    return (    
        <div>
            <Header auth={auth}/>
            <ProfileInfo />
            <ProfileHighLights />
            <Navigation />
            <ContentWall />
        </div>)
}


};
