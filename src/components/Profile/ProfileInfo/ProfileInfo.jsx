import React, {useState} from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import photoUser from '../../../assets/images/users.gif'

const ProfileInfo = ({profile, updateStatus, status, isOwner, savePhoto}) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const [editMode, setEditMode] = useState(false);


    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }

    }


    return (
        <div>
            <div className={s.descriptionblock}>
                <div>
                    <img className={s.avatar} src={profile.photos.large || photoUser}/>
                    {isOwner && <input className={s.customFileInput} type={"file"} onChange={onMainPhotoSelected}/>}
                    <div className={s.aboutUs}>
                        <ProfileStatusWithHooks status={status} update={updateStatus}/>
                        {editMode
                            ? <ProfileContentDataForm profile={profile} isReadMore={isReadMore}
                                                      setIsReadMore={setIsReadMore} isOwner={isOwner}/>
                            : <ProfileContentData profile={profile}
                                                  isReadMore={isReadMore}
                                                  setIsReadMore={setIsReadMore}
                                                  goEditMode={() => {
                                                      setEditMode(true)}}/>}


                    </div>
                </div>
            </div>
        </div>
    );
}

const ProfileContentData = ({profile, isReadMore, setIsReadMore, isOwner, goEditMode}) => {

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const readMoreText = () => {
        return (
            <div>
                <div>github:</div>
                <div>vk:</div>
                <div>discord:</div>
                <div>instagram:</div>
                <div>telegram:</div>
                <div>website:</div>
            </div>

        )
    }

    return <div>
        <div>
            FullName: {profile.fullName}
        </div>
        <div>
            Looking For A Job:{profile.lookingForAJob ? " Yes" : " No"}
        </div>
        {
            profile.lookingForAJob &&
            <div>
                My professional skills : {profile.lookingForAJobDescription ? "Yes" : "No"}
            </div>
        }
        <div>
            Contacts:
            {<span onClick={toggleReadMore}> {isReadMore ? "...more information" : readMoreText`show less`} </span>}
        </div>
        {isOwner && <div>
            <button onClick={goEditMode}>Change</button>
        </div>}
    </div>


}
const ProfileContentDataForm = (props) => {
    return(
        <div>
            form
        </div>
    )

}


export default ProfileInfo;

