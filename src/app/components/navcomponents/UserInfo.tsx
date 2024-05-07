import React from "react";
import { FaHouseUser } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { doSignOut } from "@/app/firebase/auth";

const UserInfo: React.FC<UserInfoProps> = ({ auth }) => {

    return (
        <div className="flex p-2 ml-2 items-center justify-center">
          { auth ?
          <div className="footer-text flex items-center justify-center">
            <FaHouseUser className="h-6 w-6 mr-2" />
            {auth.email}
            <HiOutlineLogout className="h-6 w-6 ml-2" onClick={() => doSignOut()} />
          </div>
            :
            'login'
        }
        </div>
    )
}

export default UserInfo;