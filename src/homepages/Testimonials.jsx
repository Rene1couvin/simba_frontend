import React from 'react';

const TestimonialCard = ({ quote, author }) => (
  <div className="testimonial-card">
    <p className="quote">“{quote}”</p>
    <div className="author">— {author}</div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "An absolutely incredible experience! Simba Adventure made our dream safari a reality. Highly recommend!",
      author: "Jane D., USA"
    },
    {
      quote: "The Kilimanjaro trek was challenging but so rewarding, thanks to the amazing support from the Simba team.",
      author: "Mark S., UK"
    },
    {
      quote: "Beyond expectations! The cultural tour was so insightful and truly authentic. Thank you, Simba Adventure!",
      author: "Aisha K., Kenya"
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>

      <style>
        {`
        /* --- Color variables for the new brand palette --- */
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

        .testimonials-section {
          padding: 4rem 1rem;
          background-color: var(--misty-green);
        }

        .section-title {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 2.5rem;
          color: var(--dark-forest);
        }

        .testimonial-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .testimonial-card {
          background: var(--white);
          border-radius: 0.5rem;
          padding: 1.5rem;
          box-shadow: 0 6px 14px rgba(0,0,0,0.12);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }

        .quote {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--charcoal-gray);
          margin-bottom: 1rem;
        }

        .author {
          text-align: right;
          font-weight: 600;
          color: var(--sunlight-gold);
          font-size: 1rem;
        }

        @media (max-width: 640px) {
          .section-title {
            font-size: 1.7rem;
          }
        }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
