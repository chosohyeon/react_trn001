import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, content: <span>한 달에 한 번<br />러쉬가 챙겨주는 시간</span>, desc: "[EVENT] EP.9 가을 향기 모음전", link: "/" },
    { id: 2, content: <span>컴 온,<br />에브리 '바디'</span>, desc: "[EVENT] 가을을 반기는 모두를 위해!", link: "/" },
    { id: 3, content: <span>감사한 마음을<br />향기로 전해요</span>, desc: "[EVENT] 몸은 멀리 있어도 마음만은 가까이", link: "/" },
    { id: 4, content: <span>러쉬 아트페어</span>, desc: "[EXHIBITION] 발달장애 아티스트와 함께하는 디지털 갤러리", link: "/" },
    { id: 5, content: <span>9월 포토<br />리뷰 이벤트</span>, desc: "여름과 가을의 건널목", link: "/" },
    { id: 6, content: <span>다운로드<br />러쉬 9월</span>, desc: "#드래곤스에그#반전매력", link: "/" }
]

const MainVisual = () => {
    const [slideNum, setSlideNum] = useState(0)

    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);

    const mainSlide = useRef(null);

    const setting = {
        arrows: false,
        afterChange: index => setIDX(index),
        autoplay: true,
        autoplaySpeed: 3000,
    }

    return (
        <section className='MainVisual'>
            <Slider {...setting} ref={mainSlide} afterChange={(index) => setSlideNum(index)}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={`itm0${slide.id} ${(idx === IDX ? 'on' : '')}`}>
                                <div className="inner" >
                                    <p className='tit'>{slide.content}</p>
                                    <div className='des'>{slide.desc}</div>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider >
            <ul className='dots'>
                    {
                        SLIDE.map((dot, idx) => <li
                            key={dot.id}
                            onClick={() => SLIDE.current.slickGoTo(idx)}
                            className={slideNum === idx ? 'on' : ''}
                        >
                            {dot.id}
                        </li>)
                    }
                </ul>
        </section >
    )
}

export default MainVisual;