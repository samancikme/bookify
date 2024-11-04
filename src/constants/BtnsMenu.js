import { CgProfile } from "react-icons/cg"; 
import { BiMessage } from "react-icons/bi"; 
import { FaPlaneDeparture } from "react-icons/fa"; 
import { AiOutlineHeart } from "react-icons/ai"; 
import { AiOutlineHome } from "react-icons/ai"; 
export const btnsMenu = [
    {
        id : 1,
        title : "Home",
        icon : AiOutlineHome ,
        path : "/"
    },
    {
        id : 2,
        title : "Wishlist",
        icon : AiOutlineHeart  ,
        path : "/wishlist",
        class : "text-red-500"
    },
    {
        id : 3,
        title : "Trips",
        icon : FaPlaneDeparture ,
        path : "/tours"
    },
    {
        id : 4,
        title : "Messages",
        icon : BiMessage  ,
        path : "/message"
    },
    {
        id : 5,
        title : "Profile",
        icon : CgProfile   ,
        path : "/account-setting"
    },
]