import { useState } from "react";
const Category = () => {
  const products = [
    {
      photo: "ProductImg/Men/Casual shirt 1590.jpg",
      name: "Men's Casual Shirt",
      price: 1590,
      category: "men",
    },
    {
      photo: "ProductImg/Men/pubjabi 1590.jpg",
      name: "Men's Premium Punjabi",
      price: 1590,
      category: "men",
    },
    {
      photo: "ProductImg/Men/pubjabi 1990.jpg",
      name: "Men's Luxary Punjabi",
      price: 1990,
      category: "men",
    },
    {
      photo: "ProductImg/Men/Trouser 990.jpg",
      name: "Men's Trouser",
      price: 990,
      category: "men",
    },
    {
      photo: "ProductImg/Men/tshirt 599.jpg",
      name: "Men's T-shirt",
      price: 599,
      category: "men",
    },
    {
      photo: "ProductImg/Women/WomanCharcoal635.jpg",
      name: "Woman Premium Trouser- Charcoal",
      price: 635,
      category: "men",
    },

    {
      photo: "ProductImg/Women/WomenEiravati1695.jpg",
      name: "Women Premium Kurti- Eiravati",
      price: 1695,
      category: "women",
    },
    {
      photo: "ProductImg/Women/WomenFern585.jpg",
      name: "Women Premium Tee - Fern",
      price: 585,
      category: "women",
    },
    {
      photo: "ProductImg/Women/WomenNefertiti585.jpg",
      name: "Women Premium Tee - Nefertiti",
      price: 585,
      category: "women",
    },
    {
      photo: "ProductImg/Women/Women Premium Tunic- Aristika 1540.jpg",
      name: "Women Premium Tunic- Aristika",
      price: 1540,
      category: "women",
    },
    {
      photo:
        "ProductImg/Women/Women's Designer Edition Pajamas - Anaya 900.jpg",
      name: "Women's Designer Edition Pajamas - Anaya",
      price: 900,
      category: "women",
    },
    {
      photo: "ProductImg/Kids/Kids Premium Blank T-shirt - Green 315.jpg",
      name: "Kids Premium Blank T-shirt - Green",
      price: 315,
      category: "kids",
    },
    {
      photo: "ProductImg/Kids/Kids Premium Maggie - Ironman 275.jpg",
      name: "Kids Premium Maggie - Ironman",
      price: 275,
      category: "kids",
    },
    {
      photo: "ProductImg/Kids/Kids Premium Polo T-Shirt - Cat Pack 690.jpg",
      name: "Kids Premium Polo T-Shirt - Cat Pack",
      price: 690,
      category: "kids",
    },
    {
      photo: "ProductImg/Kids/Kids Premium T-Shirt - Hulk 435.jpg",
      name: "Kids Premium T-Shirt - Hulk",
      price: 435,
      category: "kids",
    },
    {
      photo: "ProductImg/Kids/Kids Premium T-Shirt - Spiderman 435.jpg",
      name: "Kids Premium T-Shirt - Spiderman",
      price: 435,
      category: "kids",
    },
    {
      photo: "ProductImg/Kids/Premium Boys Trouser - Hulk 435.jpg",
      name: "Premium Boys Trouser - Hulk",
      price: 435,
      category: "kids",
    },
  ];

  const [pCategory, setPCategory] = useState("men");

  function changeCategory(category) {
    setPCategory(category);
  }
  const Products = products.filter((p) => p.category === pCategory);
  return (
    <div>
      <div className="flex justify-evenly bg-slate-200 mx-4 py-2 rounded-md">
        <button
          className="hover:font-bold hover:text-sky-500 text-lg "
          onClick={() => changeCategory("men")}
        >
          Men
        </button>
        <button
          className="hover:font-bold hover:text-sky-500 text-lg"
          onClick={() => changeCategory("women")}
        >
          Women
        </button>
        <button
          className="hover:font-bold hover:text-sky-500 text-lg"
          onClick={() => changeCategory("kids")}
        >
          Kids
        </button>
      </div>
      {/* Pruduct Display Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-4 my-8">
        {Products.map((product) => (
          <div className="rounded-md shadow-xl">
            <img
              src={product.photo}
              alt="Shoes"
              className="w-full rounded-lg"
            />
            <h2 className="card-title my-2 ml-2">{product.name}</h2>
            <p className="mb-2 ml-2">BDT: {product.price}</p>
            <button className="btn btn-info w-full">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
