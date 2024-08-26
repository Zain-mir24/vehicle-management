import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { setAuthToken } from "config";
import { SignupVerify } from "Store/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";
const Verification = () => {
  const navigate = useNavigate()
  const { token } = useParams(); // Get the token from the URL
  useEffect(() => {
    if (token) {
      setAuthToken(token);
      // Define the API call function
      const verifyToken = async () => {
        try {
          const response = await SignupVerify()
          console.log(response.data); // Handle the response
          navigate('/signin');

        } catch (error) {
          console.error('Error verifying token:', error);
        }
      };

      // Call the function
      verifyToken();
    }
  }, [token]); // Dependency array includes the token


  return (<div>
    <h1>User Verified</h1>
    {/* Your component logic here */}
  </div>)

};

export default Verification;
