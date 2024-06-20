import React, { useState } from "react";
import axios from "axios";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

const token = process.env.NEXT_PUBLIC_NEXTAUTH_SECRET;


const SignUpHandler = ({ email, password, first_name, last_name, confirm_password}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();


  const handleSignUp = async () => {
    try {
      // console.log("Data being sent:", { first_name,  last_name, email, password, confirm_password }, token); // Log data before sending request
  
      const signUpResult = await axios.post(
        "http://127.0.0.1:8000/api/register",
        {
          first_name,
          last_name,
          email,
          password,
          confirm_password
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log("SignUp Result:", JSON.stringify(signUpResult.data, null, 2)); // Log the response from the server
  
      if (signUpResult.data.error) {
        setError(signUpResult.data.message);
      } else {
        setResponse(signUpResult.data);
        onOpen();
        // window.location.href = "/api/auth/signin"; // Redirect user on successful signup
      }
    } catch (error) {
      console.error("An error occurred during sign up:", error); // Log any caught errors
      setError("An unexpected error occurred");
    }
  };

  const HandleSignUp = () => {
    onClose(); // Close the modal
    window.location.href = "/api/auth/signin"; // Redirect user on successful signup

  }

  return (
    <div>
      <button
        type="button"
        onClick={handleSignUp}
        className="border mx-auto placeholder-black bg-primary rounded w-[95%] text-white p-2 font-semibold mb-5 text-center cursor-pointer hover:bg-blue-800 ease-linear transition-all duration-300"
      >
        Submit
      </button>
      {/* {response && <pre>{JSON.stringify(response, null, 2)}</pre>} */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Successful Register</ModalHeader>
              <ModalBody>
              Continue to Sign in page?
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={HandleSignUp}>
                  Proceed 
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SignUpHandler;
