import React from "react";
import Profile from "./Profile";
const FriendList = ({list}) => {
  return list.map({profile}) => return  <Profile 
  key={profile.descr} // id
  descr={profile.descr}/>
};
export default FriendList;
