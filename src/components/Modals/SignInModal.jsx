// import React, { useState } from "react";
// import Modal from "react-modal";
// import SignIn from "../signin/SignIn";
// import SignUp from "../signup/SignUp";

// Modal.setAppElement("#root");
// function SignInModal() {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [isSignInModalOpen, setIsSignInModalOpen] = useState(true);
//   const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

//   return (
//     <React.Fragment>
//       <button className="sign_in_btn" onClick={() => setModalIsOpen(true)}>
//         Sign In
//       </button>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={() => {
//           setModalIsOpen(false);
//         }}
//         style={{
//           content: {
//             left: "20%",
//             right: "20%",
//           },
//         }}
//       >
//         <button
//           className="modal_close_btn"
//           onClick={() => setModalIsOpen(false)}
//         >
//           &times;
//         </button>
//         <div className="modalToggle">
//           <button
//             type="button"
            
//             className="btn btn-primary btn-large"
//             onClick={() => {
//               setIsSignInModalOpen(!isSignInModalOpen);
//             }}
//           >
//             Sign In
//           </button>
//           <button
//             type="button"
//             className="btn btn-secondary btn-large"
//             onClick={() => setIsSignUpModalOpen(!isSignUpModalOpen)}
//           >
//             Sign Up
//           </button>
//         </div>

//         <Modal
//           isOpen={isSignInModalOpen}
//           onRequestClose={() => {
//             setIsSignInModalOpen(false);
//           }}
//           style={{
//             overlay: {
//               background: "none",
//             },
//             content: {
//               top: "25%",
//               left: "20%",
//               right: "20%",
//               border: "none",
//             },
//           }}
//         >
//           <div>
//             <SignIn></SignIn>
//           </div>
//         </Modal>
//         <Modal
//           isOpen={isSignUpModalOpen}
//           onRequestClose={() => {
//             setIsSignUpModalOpen(false);
//           }}
//           style={{
//             overlay: {
//               background: "none",
//             },
//             content: {
//               top: "22%",
//               left: "20%",
//               right: "20%",
//               border: "none",
//             },
//           }}
//         >
//           <div>
//             <SignUp></SignUp>
//           </div>
//         </Modal>
//       </Modal>
//     </React.Fragment>
//   );
// }

// export default SignInModal;
