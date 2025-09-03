import React from "react";
import b1 from "../assets/images/bg1.jpg";

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <style>
        {`
        /* Color variables for clarity */
        :root {
          --pine-green: #2E7D32;
          --fern-green: #4CAF50;
          --sky-blue: #64B5F6;
          --sunlight-gold: #FFD54F;
          --misty-green: #E8F5E9;
          --stone-gray: #F5F5F5;
          --earth-brown: #5D4037;
          --warm-amber: #FFB300;
          --moss-glow: #A5D6A7;
          --dark-forest: #1B5E20;
          --charcoal-gray: #424242;
          --white: #FFFFFF;
        }
        .h2{
        padding-top:36rem;
        }

        .about-us-section {
          padding: 3rem 1rem;
          background-color: var(--misty-green);
        }

        .about-us-container {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          align-items: center;
        }

        .about-us-image {
          flex: 1 1 40%;
        }

        .about-us-image img {
          width: 100%;
          height: auto;
          border-radius: 0.5rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .about-us-content {
          flex: 1 1 55%;
        }

        .about-us-content h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--dark-forest);
        }

        .about-us-content p {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--charcoal-gray);
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .about-us-container {
            flex-direction: column;
          }

          .about-us-image, .about-us-content {
            flex: 1 1 100%;
          }

          .about-us-content h2 {
            text-align: center;
          }
        }
        `}
      </style>
      {/* <h2 className="text-center p-8 m-4">About Simba Adventure</h2> */}
      <div className="about-us-container">
        <div className="about-us-image">
          <img src={b1} alt="Simba Adventure Safari" />
        </div>

        <div className="about-us-content">
          <p>
            At Simba Adventure, we invite you to step beyond the ordinary and
            into a realm where the soul of Africa awakens. Journey with us
            through vast savannahs kissed by golden sunlight, where the roar of
            the lion echoes the heartbeat of the wild. Feel the rhythm of
            ancient lands beneath your feet and the whisper of the wind carrying
            stories of untamed beauty and enduring spirit.
          </p>
          <p>
            Our dedicated guides, guardians of this precious wilderness, will
            lead you on paths less traveled — where every moment is a
            brushstroke on the canvas of your adventure. Here, the majestic
            dance of wildlife unfolds in perfect harmony with vibrant cultures
            that celebrate life in all its colors.
          </p>
          <p>
            With respect for nature and a passion for authentic experience,
            Simba Adventure crafts each journey as a living poem — a celebration
            of discovery, wonder, and connection. Come, let the wild call to
            you, and write your own chapter in the timeless story of Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
