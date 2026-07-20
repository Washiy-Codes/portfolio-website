"use client";
import {useState} from "react";
import Sidebar from "./components/sidebar";

import Hero from "./components/hero";
function Homepage() {
  const [isOpen, setIsOpen] = useState(false);
  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      
      <Sidebar isOpen={isOpen} />
      <Hero isOpen={isOpen} onClick={handleSidebarToggle} />
    </div>
  );
}

export default Homepage;