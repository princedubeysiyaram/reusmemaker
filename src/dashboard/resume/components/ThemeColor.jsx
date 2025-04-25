// src/components/ThemeColor.js
import React, { useState, useRef, useEffect, useContext } from "react";
import { LayoutGrid } from "lucide-react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useParams } from "react-router-dom";
import GlobalApi from "./../../../../service/GlobalApi";
 // Make sure to create this file

const ThemeColor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {resumeId}=useParams();
  const popoverRef = useRef();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
    "#33FFA1", "#FF7133", "#71FF33", "#7133FF", "#FF3371",
    "#33FF71", "#3371FF", "#A1FF33", "#33A1FF", "#FF5733",
    "#5733FF", "#33FF5A", "#5A33FF", "#FF335A", "#335AFF",
    "#1E88E5", // blue
    "#43A047", // green
    "#E53935", // red
    "#FB8C00", // orange
    "#8E24AA", // purple
    "#00ACC1", // cyan
    "#FDD835", // yellow
    "#6D4C41", // brown
    "#3949AB", // indigo
    "#00897B", // teal
    "#C2185B", // deep pink
    "#5E35B1", // deep purple
    "#7CB342", // light green
    "#F4511E", // deep orange
    "#039BE5", // light blue
    "#F06292", // pink
    "#455A64", // blue‑grey
    "#D81B60", // crimson
    "#00796B", // dark teal
    "#FFA000", // amber
  ];

  const onColorSelect = (color) => {
    setResumeInfo({
      ...resumeInfo,
      ThemeColor: color,
    });
    setIsOpen(false);


    const data={
      data:{
        ThemeColor:color
      }
    }
    GlobalApi.UpdateResumeDetail(resumeId,data).then(resp=>{
      console.log(resp);
      toast("theme color Updated")
    })
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="theme-color-container" ref={popoverRef}>
      <button className="theme-button" onClick={() => setIsOpen(!isOpen)}>
        <LayoutGrid size={16} /> Theme
      </button>

      {isOpen && (
        <div className="popover">
          <div className="color-grid">
            {colors.map((color) => (
              <div
                key={color}
                className="color-circle"
                style={{ backgroundColor: color }}
                onClick={() => onColorSelect(color)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeColor;




