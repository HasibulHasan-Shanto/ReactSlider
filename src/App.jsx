
import './App.css';
import Image from './components/Image';
import product from './assets/product.png';
import Heading from './components/Heading';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NextArrow from './components/NextArrow';
import PrevArrow from './components/PrevArrow';


function App() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }
  return (
    
    <>

      <div className="max-w-[1320px] m-auto mt-[100px]">
      <div className="slider-container">
        <Slider {...settings}>

    
          <div className=" relative p-2">
        <Image imgSrc={product} imgAlt={product} className={'w-full'}/>
        <Heading
                  text={"New"}
                  as={"p"}
                  className={"text-white text-[14px] bg-black py-3 px-7 absolute top-5 left-6"}
                />
        </div>
          <div className=" relative p-2">
        <Image imgSrc={product} imgAlt={product} className={'w-full'}/>
        <Heading
                  text={"New"}
                  as={"p"}
                  className={"text-white text-[14px] bg-black py-3 px-7 absolute top-5 left-6"}
                />
        </div>
          <div className=" relative p-2">
        <Image imgSrc={product} imgAlt={product} className={'w-full'}/>
        <Heading
                  text={"New"}
                  as={"p"}
                  className={"text-white text-[14px] bg-black py-3 px-7 absolute top-5 left-6"}
                />
        </div>
          <div className=" relative p-2">
        <Image imgSrc={product} imgAlt={product} className={'w-full'}/>
        <Heading
                  text={"New"}
                  as={"p"}
                  className={"text-white text-[14px] bg-black py-3 px-7 absolute top-5 left-6"}
                />
        </div>
   

        
          
          </Slider>
          
          </div>

      </div>
    </>
  );
}

export default App;


