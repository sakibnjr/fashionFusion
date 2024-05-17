const Carousel = () => {
  return (
    <div>
      <section className="container mx-auto px-4 mb-4">
        <p className="text-xl text-blue-900 mb-2 text-center tracking-widest">
          #Trending collections
        </p>

        <div className="carousel w-full">
          <div
            id="slide1"
            className="carousel-item relative w-full flex justify-center items-center gap-10 bg-slate-200 rounded-md"
          >
            <img src="img/tshirt1.jpg" className="w-1/2 my-4 rounded-md" />
            <div className="hidden md:block">
              <h1 className="mb-4 text-xl lg:text-4xl lg:mb-8">
                Designer Edition T-shirt
              </h1>
              <p className="mb-4 font-bold bg-sky-50 p-2 rounded inline-block lg:mb-8">
                BDT: 545
              </p>
              <br />
              <button className="btn btn-info">
                <span>
                  <i className="ph ph-shopping-cart-simple"></i>
                </span>
                Add to cart
              </button>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full lg:flex justify-center items-center gap-10 bg-slate-200 rounded-md"
          >
            <img src="img/panjabi1.png" className="w-1/2 my-4 rounded-md" />
            <div className="hidden md:block">
              <h1 className="mb-4 text-xl lg:text-4xl lg:mb-8">
                Men's Premium Punjabi
              </h1>
              <p className="mb-4 font-bold bg-sky-50 p-2 rounded inline-block lg:mb-8">
                BDT: 2290
              </p>
              <br />
              <button className="btn btn-info">
                <span>
                  <i className="ph ph-shopping-cart-simple"></i>
                </span>
                Add to cart
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide3"
            className="carousel-item relative w-full lg:flex justify-center items-center gap-10 bg-slate-200 rounded-md"
          >
            <img src="img/tshirt1full.jpg" className="w-1/2 my-4 rounded-md" />
            <div className="hidden md:block">
              <h1 className="mb-4 text-xl lg:text-4xl lg:mb-8">
                Full-Sleeve T-shirt
              </h1>
              <p className="mb-4 font-bold bg-sky-50 p-2 rounded inline-block lg:mb-8">
                BDT: 695
              </p>
              <br />
              <button className="btn btn-info">
                <span>
                  <i className="ph ph-shopping-cart-simple"></i>
                </span>
                Add to cart
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
