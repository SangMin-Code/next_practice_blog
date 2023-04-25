'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props={
    children :React.ReactNode;
}

const MultiCarousel= ({children}:Props) =>{

    const responsive = {

        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

    return(
        <Carousel infinite autoPlay responsive={responsive} itemClass="m-2" >
            {children}
        </Carousel>
    )
}

export default MultiCarousel