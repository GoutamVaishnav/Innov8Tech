// import { ArrowRight } from "lucide-react";

// const SideButton = () => {
//   const handleClick = () => {
//     window.open("https://example.com", "_blank"); // दूसरी वेबसाइट खोलना
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className="fixed bottom-5 right-5 md:bottom-10 md:right-10 bg-blue-500 text-white p-5 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center scale-100 hover:scale-110"
//     >
//       <ArrowRight size={24} />
//     </button>
//   );
// };

// export default SideButton;
// import { assets } from "../assets/assets";
// const SideButton = () => {
//   const handleClick = () => {
//     window.open("https://example.com", "_blank"); // दूसरी वेबसाइट खोलना
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className="fixed bottom-5 right-5 md:bottom-10 md:right-10 bg-blue-500 text-white p-5 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center scale-100 hover:scale-110"
//     >
//       <img
//         src={assets.assistantchatbot}
//         alt="Go to Website"
//         className="w-10 h-10" // Icon size adjust करने के लिए
//       />
//     </button>
//   );
// };

// export default SideButton;

// import { assets } from "../assets/assets";

// const SideButton = () => {
//   const handleClick = () => {
//     window.open("https://example.com", "_blank"); // दूसरी वेबसाइट खोलना
//   };

//   return (
//     <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 flex items-center gap-2 group">
//       {/* Hover Text */}
//       <span className="opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out bg-blue-800 text-white px-3 py-1 rounded-lg text-sm shadow-lg">
//         Lets talk to Dr. Jiva !
//       </span>

//       {/* Button with Icon */}
//       <button
//         onClick={handleClick}
//         className="bg-blue-500 text-white p-5 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center scale-100 hover:scale-110"
//       >
//         <img
//           src={assets.assistantchatbot}
//           alt="Go to Website"
//           className="w-10 h-10"
//         />
//       </button>
//     </div>
//   );
// };

// export default SideButton;

// import { assets } from "../assets/assets";

// const SideButton = () => {
//   const handleClick = () => {
//     window.open("https://example.com", "_blank"); // दूसरी वेबसाइट खोलना
//   };

//   return (
//     <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 flex items-center gap-2 group">
//       {/* Hover Text */}
//       <span className="opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out bg-blue-800 text-white px-3 py-1 rounded-lg text-sm shadow-xl">
//         Let's talk to Dr. Jiva!
//       </span>

//       {/* Button with Icon */}
//       <button
//         onClick={handleClick}
//         className="bg-blue-500 text-white p-5 rounded-full shadow-2xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center scale-100 hover:scale-110"
//       >
//         <img
//           src={assets.assistantchatbot}
//           alt="Go to Website"
//           className="w-10 h-10"
//         />
//       </button>
//     </div>
//   );
// };

// export default SideButton;

import { assets } from "../assets/assets";

const SideButton = () => {
  const handleClick = () => {
    window.open("https://end-to-end-chat-bot-medical-4.onrender.com", "_blank"); // दूसरी वेबसाइट खोलना
  };

  return (
    <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 flex items-center gap-2 group">
      {/* Hover Text (Only visible on hover) */}
      <span className="opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out bg-blue-800 text-white px-3 py-1 rounded-lg text-sm shadow-xl">
        Let's talk to Dr. Jiva!
      </span>

      {/* Button with Icon (Shadow always visible) */}
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white p-5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center scale-100 hover:scale-110"
      >
        <img
          src={assets.nurseassistant}
          alt="Go to Website"
          className="w-12 h-12 rounded-lg "
        />
      </button>
    </div>
  );
};

export default SideButton;
