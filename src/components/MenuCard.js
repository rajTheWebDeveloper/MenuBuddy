import React from 'react'

const MenuCard = ({filteredData}) => {
  return (
    <section className="menu-section w-[90vw] mx-auto max-w-[1170px] text-center grid justify-center items-start grid-cols-1 gap-y-7 gap-x-4 md:grid-cols-2 xl:grid-cols-3 mt-12">
      {filteredData.map((menu, idx) => {
        let { title, category, price, img, desc } = menu;
        return (
          <article
            key={idx}
            className="max-w-[370px] bg-white text-center mx-auto rounded-md overflow-hidden shadow-lg"
          >
            <img src={img} alt="" className="w-full h-[220px] object-cover" />
            <div className="info px-5 py-6">
              <div className="primary flex justify-between items-center mb-4">
                <h2 className="capitalize font-semibold tracking-wide text-lg">
                  {title}
                </h2>
                <p className="bg-amber-500 text-white flex justify-center px-2 text-[15px] py-[1px] rounded-sm tracking-wider">
                  $ {price}
                </p>
              </div>
              <p className="text-left text-sm text-gray-500 mt-6 tracking-wide">
                {desc}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default MenuCard