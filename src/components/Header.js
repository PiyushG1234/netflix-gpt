import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {addUser , removeUser} from "../utils/userSlice";
import {LOGO} from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className=" w-44"
        src={LOGO}
        alt="logo"
      />

      {user && (
        <div className="flex p-2 ">
          <img
            alt="usericon"
            className="w-10 h-10 "
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            {" "}
            (sign out){" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
