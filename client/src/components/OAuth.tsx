import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { firebaseApp } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/userSlice/userSlice";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type IProps = {
  googlePage: string;
};

const OAuth = ({ googlePage }: IProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(firebaseApp);

      //Popup request
      const result = await signInWithPopup(auth, provider);

      //SENDING THE FIREBASE RESULT TO BACKEND
      const res = await fetch("api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      toast.success("Signed In Successfully!");
      setTimeout(() => {
        toast.info("Navigating...Please wait!");
        navigate("/");
      }, 3000);
    } catch (error) {
      console.log("Could not sign in with google", error);
      toast.error("Could not sign in with google");
    }
  };
  return (
    <>
      <button
        onClick={handleGoogleClick}
        type="button"
        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 hover:bg-gray-500 hover:text-white bg-gray-400 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
      >
        <div className="bg-white p-2 rounded-full">
          <FcGoogle />
        </div>
        <span className="ml-4">{googlePage} with Google</span>
      </button>
    </>
  );
};

export default OAuth;
