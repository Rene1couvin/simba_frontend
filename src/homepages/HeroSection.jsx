import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";

const Carousel = () => {
  const carouselItems = [
    {
      id: 1,
      img: img1,
      author: "SIMBA Advanture",
      title: "Bull Moose",
      topic: "Detail:",
      des: "A bull moose's antlers are perhaps its most famous feature. Unlike the branched antlers of other deer, a moose's antlers are broad and flattened, resembling an open hand with multiple points or tines. These massive structures, which can span up to 6 feet, are grown and shed annually, with their size reflecting the bull's age, diet, and overall health. The antlers are used primarily for dominance displays and combat during the mating season, known as the rut.",
    },
    {
      id: 2,
      img: img2,
      author: "SIMBA Advanture",
      title: "Bull Moose",
      topic: "Detail:",
      des: "A bull moose's antlers are perhaps its most famous feature. Unlike the branched antlers of other deer, a moose's antlers are broad and flattened, resembling an open hand with multiple points or tines. These massive structures, which can span up to 6 feet, are grown and shed annually, with their size reflecting the bull's age, diet, and overall health. The antlers are used primarily for dominance displays and combat during the mating season, known as the rut.",
    },
    {
      id: 3,
      img: img3,
      author: "SIMBA Advanture",
      title: "The Majestic Elephant",
      topic: "Detail:",
      des: "The elephant, a symbol of immense strength and wisdom, is the largest terrestrial animal on Earth. These awe-inspiring creatures captivate with their sheer size, complex social structures, and remarkable intelligence. Found across various habitats in Africa and Asia, elephants play a vital role in their ecosystems and hold a significant place in human cultures.",
    },
    {
      id: 4,
      img: img4,
      author: "SIMBA Advanture",
      title: "The Majestic Jaguar",
      topic: "Detail:",
      des: "The jaguar (Panthera onca) is a powerful and elusive big cat native to the Americas. Often mistaken for a leopard due to its similar spotted coat, the jaguar stands out as a symbol of strength and is a key figure in the ecosystems of Central and South America. This magnificent creature is not only the largest cat in the Western Hemisphere but also possesses unique characteristics that set it apart from its feline relatives.",
    },
  ];

  const [listItems, setListItems] = useState(carouselItems);
  const [thumbnailItems, setThumbnailItems] = useState(carouselItems);
  const [transitionClass, setTransitionClass] = useState("");
  const timeAutoNext = 7000;
  const timeRunning = 3000;
  const autoNextTimeoutRef = useRef(null);

  const showSlider = (type) => {
    if (transitionClass) return;

    const updateItems = (currentItems) => {
      let newItems = [...currentItems];
      if (type === "next") {
        const firstItem = newItems.shift();
        newItems.push(firstItem);
      } else {
        const lastItem = newItems.pop();
        newItems.unshift(lastItem);
      }
      return newItems;
    };

    setListItems(updateItems(listItems));
    setThumbnailItems(updateItems(thumbnailItems));
    setTransitionClass(type);

    setTimeout(() => {
      setTransitionClass("");
    }, timeRunning);
  };

  useEffect(() => {
    const runAutoNext = () => {
      autoNextTimeoutRef.current = setTimeout(() => {
        showSlider("next");
        runAutoNext();
      }, timeAutoNext);
    };

    runAutoNext();

    return () => {
      if (autoNextTimeoutRef.current) {
        clearTimeout(autoNextTimeoutRef.current);
      }
    };
  }, [transitionClass]); // Rerun effect when transitionClass changes to reset timer

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          body { margin: 0; background-color: #000; color: #eee; font-family: Poppins; font-size: 12px; }
          a { text-decoration: none; }
          header a { color: #eee; margin-right: 40px; }
          .carousel { height: 100vh; margin-top: -50px; overflow: hidden; position: relative; }
          .carousel .list .item { width: 100%; height: 100%; position: absolute; inset: 0 0 0 0; }
          .carousel .list .item img { width: 100%; height: 100%; object-fit: cover; }
          .carousel .list .item .content { position: absolute; top: 20%; width: 1140px; max-width: 80%; left: 50%; transform: translateX(-50%); padding-right: 30%; box-sizing: border-box; color: #fff; text-shadow: 0 5px 10px #0004; }
          .carousel .list .item .author { font-weight: bold; letter-spacing: 10px; }
          .carousel .list .item .title, .carousel .list .item .topic { font-size: 5em; font-weight: bold; line-height: 1.3em; }
          .carousel .list .item .topic { color: #f1683a; }
          .carousel .list .item .buttons { display: grid; grid-template-columns: repeat(2, 130px); grid-template-rows: 40px; gap: 5px; margin-top: 20px; }
          .carousel .list .item .buttons button { border: none; background-color: #eee; letter-spacing: 3px; font-family: Poppins; font-weight: 500; }
          .carousel .list .item .buttons button:nth-child(2) { background-color: transparent; border: 1px solid #fff; color: #eee; }
          /* thumbnail */
          .thumbnail { position: absolute; bottom: 50px; left: 50%; width: max-content; z-index: 100; display: flex; gap: 20px; }
          .thumbnail .item { width: 150px; height: 220px; flex-shrink: 0; position: relative; }
          .thumbnail .item img { width: 100%; height: 100%; object-fit: cover; border-radius: 20px; }
          .thumbnail .item .content { color: #fff; position: absolute; bottom: 10px; left: 10px; right: 10px; }
          .thumbnail .item .content .title { font-weight: 500; }
          .thumbnail .item .content .description { font-weight: 300; }
          /* arrows */
          .arrows { position: absolute; top: 80%; right: 52%; z-index: 100; width: 300px; max-width: 30%; display: flex; gap: 10px; align-items: center; }
          .arrows button { width: 40px; height: 40px; border-radius: 50%; background-color: #eee4; border: none; color: #fff; font-family: monospace; font-weight: bold; transition: .5s; }
          .arrows button:hover { background-color: #fff; color: #000; }
          /* animation */
          .carousel .list .item:nth-child(1) { z-index: 1; }
          .carousel .list .item:nth-child(1) .content .author,
          .carousel .list .item:nth-child(1) .content .title,
          .carousel .list .item:nth-child(1) .content .topic,
          .carousel .list .item:nth-child(1) .content .des,
          .carousel .list .item:nth-child(1) .content .buttons {
            transform: translateY(50px);
            filter: blur(20px);
            opacity: 0;
            animation: showContent .5s 1s linear 1 forwards;
          }
          @keyframes showContent { to { transform: translateY(0px); filter: blur(0px); opacity: 1; } }
          .carousel .list .item:nth-child(1) .content .title { animation-delay: 1.2s!important; }
          .carousel .list .item:nth-child(1) .content .topic { animation-delay: 1.4s!important; }
          .carousel .list .item:nth-child(1) .content .des { animation-delay: 1.6s!important; }
          .carousel .list .item:nth-child(1) .content .buttons { animation-delay: 1.8s!important; }
          /* create animation when next click */
          .carousel.next .list .item:nth-child(1) img {
            width: 150px; height: 220px; position: absolute; bottom: 50px; left: 50%; border-radius: 30px; animation: showImage .5s linear 1 forwards;
          }
          @keyframes showImage { to { bottom: 0; left: 0; width: 100%; height: 100%; border-radius: 0; } }
          .carousel.next .thumbnail .item:nth-last-child(1) { overflow: hidden; animation: showThumbnail .5s linear 1 forwards; }
          .carousel.prev .list .item img { z-index: 100; }
          @keyframes showThumbnail { from { width: 0; opacity: 0; } }
          .carousel.next .thumbnail { animation: effectNext .5s linear 1 forwards; }
          @keyframes effectNext { from { transform: translateX(150px); } }
          /* running time */
          .carousel .time { position: absolute; z-index: 1000; width: 0%; height: 3px; background-color: #f1683a; left: 0; top: 0; }
          .carousel.next .time, .carousel.prev .time { animation: runningTime 3s linear 1 forwards; }
          @keyframes runningTime { from { width: 100% } to { width: 0 } }
          /* prev click */
          .carousel.prev .list .item:nth-child(2) { z-index: 2; }
          .carousel.prev .list .item:nth-child(2) img { animation: outFrame 0.5s linear 1 forwards; position: absolute; bottom: 0; left: 0; }
          @keyframes outFrame { to { width: 150px; height: 220px; bottom: 50px; left: 50%; border-radius: 20px; } }
          .carousel.prev .thumbnail .item:nth-child(1) { overflow: hidden; opacity: 0; animation: showThumbnail .5s linear 1 forwards; }
          .carousel.next .arrows button, .carousel.prev .arrows button { pointer-events: none; }
          .carousel.prev .list .item:nth-child(2) .content .author,
          .carousel.prev .list .item:nth-child(2) .content .title,
          .carousel.prev .list .item:nth-child(2) .content .topic,
          .carousel.prev .list .item:nth-child(2) .content .des,
          .carousel.prev .list .item:nth-child(2) .content .buttons { animation: contentOut 1.5s linear 1 forwards!important; }
          @keyframes contentOut { to { transform: translateY(-150px); filter: blur(20px); opacity: 0; } }
          @media screen and (max-width: 678px) {
            .carousel .list .item .content { padding-right: 0; }
            .carousel .list .item .content .title { font-size: 30px; }
          }
        `}
      </style>

      <div className={`carousel ${transitionClass}`}>
        <div className="list">
          {listItems.map((item) => (
            <div key={item.id} className="item">
              <img src={item.img} alt={`Animal image ${item.id}`} />
              <div className="content">
                <div className="author">{item.author}</div>
                <div className="title">{item.title}</div>
                <div className="topic">{item.topic}</div>
                <div className="des">{item.des}</div>
                <div className="buttons">
                  <button>SEE MORE</button>
                  <button>SUBSCRIBE</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail">
          {thumbnailItems.map((item, index) => (
            <div key={item.id} className="item">
              <img src={item.img} alt={`Thumbnail ${item.id}`} />
              <div className="content">
                <div className="title">Name Slider</div>
                <div className="description">Description</div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev" onClick={() => showSlider("prev")}>
            &lt;
          </button>
          <button id="next" onClick={() => showSlider("next")}>
            &gt;
          </button>
        </div>

        {/* <div className="time"></div> */}
      </div>
    </>
  );
};

export default Carousel;
