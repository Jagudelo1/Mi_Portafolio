import React from "react"
import { Carousel } from "react-bootstrap";

export function Carousel ({img1, img2, img3, img4,}){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return(
        <div className="Content_Carousel">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img src={img1} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img3} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img4} />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}