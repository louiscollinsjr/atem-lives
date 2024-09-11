import React from "react";


interface BuildButtonListProps {
    buttons: string[];
  }
  
const BuildButtonList: React.FC<BuildButtonListProps> = ({ buttons }) => {
    return (
      <div className="flex flex-wrap gap-4 p-4 justify-center">
        {buttons.map((label, index) => (
          <button
            key={index}
            className="pointer-events-none flex justify-center text-xs bg-slate-0 px-4 py-1 rounded-full hover:bg-slate-50 border-slate-200 border"
          >
            {label}
  
          </button>
        ))}
      </div>
    );
  };
  
  export default BuildButtonList;