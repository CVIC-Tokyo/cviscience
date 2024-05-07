import React from "react";
import { FaHouseUser } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { doSignOut } from "@/app/firebase/auth";

const UserInfo: React.FC<UserInfoProps> = ({ auth, handleIsSignIn }) => {
  const handleSignOut = async (e: any) => {
    try {
      e.preventDefault();
      await doSignOut();
      handleIsSignIn();
    } catch (error) {
      console.log(error);
    }
  }

    return (
        <div className="flex p-2 ml-2 items-center justify-center">
          { auth ?
          <div className="footer-text flex items-center justify-center">
            <FaHouseUser className="h-6 w-6 mr-2" />
            {auth.email}
            <div className="flex items-center jusitfy-center ml-2 rounded-md hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 cursor-pointer">
                <HiOutlineLogout className="h-6 w-6 ml-2" onClick={(e) => handleSignOut(e)} />
                Logout
            </div>
          </div>
            :
            'login'
        }
        </div>
    )
}

export default UserInfo;