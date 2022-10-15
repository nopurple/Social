import React from "react";
import s from './Users.module.css';
import photoUser from '../../assets/images/users.gif'
import {NavLink} from "react-router-dom";

let User = ({ user,followingProgress, unfollow,follow}) => {
    return (
        <div>
            <div>
                 <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : photoUser} className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                           {user.followed
                               ? <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                                   unfollow(user.id);
                               }}>UnFollow</button>
                               : <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                                   follow(user.id);
                               }}>Follow</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
            </div>
        </div>
    )
}
export default User;