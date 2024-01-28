import React from 'react'

const Buttons = ({filterMenu,buttons}) => {
  return (
    <section className="btn-section flex justify-between w-[90vw] max-w-[300px] mx-auto md:max-w-[400px] gap-4 items-center">
      {buttons.map((button, idx) => {
        return (
          <button
            key={idx}
            onClick={() => filterMenu(button)}
            className="capitalize text-[14px] py-[4px] px-2 md:px-4 bg-amber-500 text-white rounded-sm cursor-pointer hover:bg-amber-600 transition-all shadow-md"
          >
            {button}
          </button>
        );
      })}
    </section>
  );
}

export default Buttons