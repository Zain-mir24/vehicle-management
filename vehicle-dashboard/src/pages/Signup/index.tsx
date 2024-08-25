/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import TextInput from "components/ui/Inputs/TextInput";
import PasswordInput from "components/ui/Inputs/PasswordInput";
import handImg from "assets/hand.svg";
import Button from "components/ui/Button";
import { Link } from "react-router-dom";

const Signup = () => {
  const [userdata, setuserdata] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(userdata, "userdata");
  };
  return (
    <div className="relative flex flex-col gap-5 items-center justify-center w-full min-h-[100vh]">
      <div className="bg-grey-300 rounded-[50%] w-[80px] h-[80px] flex justify-center items-center p-5">
        <img src={handImg} alt="img" className="w-full h-full" />
      </div>
      <h1 className="text-black font-semibold text-center text-[40px]">
        Vehecrita
      </h1>
      <p className="mt-3 text-grey-500 max-w-[512px] text-center">
        Manage and track your fleet efficiently with our comprehensive vehicle
        management system
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 mt-5 w-[550px]"
      >
        <div className="flex flex-col gap-8">
          <TextInput
            value={userdata.username}
            onChange={(e) =>
              setuserdata({ ...userdata, username: e.target.value })
            }
            id="username"
            label="Username"
            className="!w-full !h-[60px]"
            required
          />
          <TextInput
            value={userdata.email}
            onChange={(e) =>
              setuserdata({ ...userdata, email: e.target.value })
            }
            id="email"
            label="Email address"
            className="!w-full !h-[60px]"
            required
          />
          <PasswordInput
            value={userdata.password}
            onChange={(e) =>
              setuserdata({ ...userdata, password: e.target.value })
            }
            id="password"
            label="Password"
            className="!w-[96%] !h-[60px]"
            required
          />
          <PasswordInput
            value={userdata.confirmpassword}
            onChange={(e) =>
              setuserdata({ ...userdata, password: e.target.value })
            }
            id="confirmpassword"
            label="Confirm Password"
            className="!w-[96%] !h-[60px]"
            required
          />
          <Button
            type="submit"
            label="Signup"
            className="w-full h-[60px] !bg-secondary-green"
          />
        </div>

        <span className="text-grey-700">
          Have an account?{" "}
          <Link to="/signin" className="text-secondary-green">
            Signin
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
