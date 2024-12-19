import React from "react";
import HeaderDesign from "./HeaderDesign";

import { BsPersonAdd } from "react-icons/bs";
import { BiBell } from "react-icons/bi";

import { RiHome5Fill } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";

const Header = () => {
  return (
    <div>
      <HeaderDesign
        Homeicon={<RiHome5Fill size={25} />}
        AddFriendicon={<BsPersonAdd size={25} />}
        Reelsicon={<SiYoutubeshorts size={25} />}
        Notificationicon={<BiBell size={25} />}
        Account=""
      />
    </div>
  );
};

export default Header;
