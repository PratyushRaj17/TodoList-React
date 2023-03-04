import{ChangeProfile} from "../components/ChangeProfile";

export const Profile=(props)=>{
    return(
    <div>
        {" "}
        PROFILE,user is:{props.username}
        <ChangeProfile setUsername={props.setUsername}/>
        </div>
        );
};