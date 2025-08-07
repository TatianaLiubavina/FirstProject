"use client";

import React, { useEffect, useState } from "react";

export default function NavMenu() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleToggle = () => {
      setIsCollapsed(prev => !prev);
    };

    const toggleButton = document.getElementById('toggleButton');
    if (toggleButton) {
      toggleButton.addEventListener('click', handleToggle);
      
      return () => {
        toggleButton.removeEventListener('click', handleToggle);
      };
    }
  }, []);

  useEffect(() => {
    const nav = document.querySelector('nav');
    const navPositionBlock = document.querySelector('.nav-position-block');
    
    if (nav && navPositionBlock) {
      if (isCollapsed) {
        nav.classList.add('collapsed');
        navPositionBlock.classList.add('collapsed');
      } else {
        nav.classList.remove('collapsed');
        navPositionBlock.classList.remove('collapsed');
      }
    }
  }, [isCollapsed]);

  return null;
}