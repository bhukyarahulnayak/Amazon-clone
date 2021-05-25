import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div ClassName="relative">
            <div className=" absolute w-full h-30 bg-gradient-to-t from-blue-100 bottom-0 z-20 "/>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div><img loading="lazy" src="https://links.papareact.com/gi1" alt="" /></div>
                <div><img loading="lazy" src="https://links.papareact.com/6ff" alt="" /></div>
                <div><img loading="lazy" src="https://links.papareact.com/7ma" alt="" /></div>

            </Carousel>
        </div>
    )
}

export default Banner;