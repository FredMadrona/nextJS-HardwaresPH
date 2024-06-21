// SignUpHandler.js

import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import registerService from "./RegisterService";

const token = process.env.NEXT_PUBLIC_NEXTAUTH_SECRET;

const SignUpHandler = ({ email, password, first_name, last_name, confirm_password }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleSignUp = async () => {
    const result = await registerService.signUp({ first_name, last_name, email, password, confirm_password, token });

    if (result.error) {
      setError(result.message);
    } else {
      setResponse(result.data);
      onOpen();
    }
  };

  const handleProceedToSignIn = () => {
    onClose(); // Close the modal
    window.location.href = "/api/auth/signin"; // Redirect user on successful signup
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleSignUp}
        className="border mx-auto placeholder-black bg-primary rounded w-[95%] text-white p-2 font-semibold mb-5 text-center cursor-pointer hover:bg-blue-800 ease-linear transition-all duration-300"
      >
        Submit
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Successful Register</ModalHeader>
              <ModalBody>
                Continue to Sign in page?
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={handleProceedToSignIn}>
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
