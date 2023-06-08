import React  from "react"; 
import { ProfileInfo, ProfileHighLights , Navigation , ContentWall, Header } from "../../components";
import { Navigate } from "react-router-dom";

export const Profile = () => {
const auth = false;

if (!auth) return <Navigate to={"signup"} />

return (    
<div>
    <Header />
    <ProfileInfo />
    <ProfileHighLights />
    <Navigation />
    <ContentWall />
</div>)
};
