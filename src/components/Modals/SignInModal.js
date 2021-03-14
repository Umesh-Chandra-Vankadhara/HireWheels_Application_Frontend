import React, { useState } from "react";
import Modal from "react-modal";
import Signin from "../signin/Signin";
import Signup from "../signup/Signup";

Modal.setAppElement("#root");
function SignInModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  // const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  return (
    <React.Fragment>
      <button className="sign_in_btn" onClick={() => setModalIsOpen(true)}>
        Sign In
      </button>
      ;
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={{
          content: {
            left: 25 + "%",
            right: 25 + "%",
          },
        }}
      >
        <button
          className="modal_close_btn"
          onClick={() => setModalIsOpen(false)}
        >
          X
        </button>

        <button>Sign In</button>
        <button>Sign Up</button>
    
        <Signin></Signin>
        <Signup></Signup>
      </Modal>
    </React.Fragment>
  );
}
export default SignInModal;
