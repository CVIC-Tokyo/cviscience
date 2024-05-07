import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import SideBar from "./Sidebar";

const HamburgerButton: React.FC<HamburgerProps> = ({
  showSidebar,
  setShowSidebar,
  handleSidebar,
  locale,
  auth,
  handleIsSignIn,
}) => {
  const [active, setActive] = useState(false);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
    },
  };

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="z-10 relative w-full h-full rounded-lg bg-cvic-red transition-colors p-2"
        onClick={() => setActive(!active)}
        animate={showSidebar ? "open" : "closed"}
      >
        <motion.span
          className="absolute h-0.5 w-8 bg-white"
          style={{
            left: "50%",
            top: "30%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["30%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "30%"],
            },
          }}
        />
        <motion.span
          className="absolute h-0.5 w-8 bg-white"
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          className="absolute h-0.5 w-8 bg-white"
          style={{
            left: "50%",
            bottom: "30%",
            x: "-50%",
            y: "50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              bottom: ["30%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              bottom: ["50%", "50%", "30%"],
            },
          }}
        />
      </motion.div>
      <div
        className={
          showSidebar
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70"
            : ""
        }
      >
        <SideBar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          handleSidebar={handleSidebar}
          locale={locale}
          auth={auth}
          handleIsSignIn={handleIsSignIn}
        />
      </div>
    </MotionConfig>
  );
};

export default HamburgerButton;
