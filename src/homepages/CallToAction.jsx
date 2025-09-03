import React from "react";

const articles = [
  {
    id: 1,
    title: "Top 5 Must-Visit SIMBA Destinations",
    image: "https://placehold.co/300x200?text=Safari+Destinations",
    excerpt:
      "Discover the most breathtaking Simba spots in Rwanda for unforgettable wildlife experiences.",
    link: "/blog/top-safari-destinations",
  },
  {
    id: 2,
    title: "Adventure Travel Safety Tips",
    image: "https://placehold.co/300x200?text=Travel+Safety",
    excerpt:
      "Ensure your next adventure is safe and stress-free with our essential safety checklist.",
    link: "/blog/adventure-safety-tips",
  },
  {
    id: 3,
    title: "Packing Essentials for Mountain Treks",
    image: "https://placehold.co/300x200?text=Packing+Tips",
    excerpt:
      "Stay prepared on your high-altitude treks with our ultimate packing guide.",
    link: "/blog/mountain-packing-guide",
  },
  {
    id: 4,
    title: "Why You Should Visit Rwanda in 2025",
    image: "https://placehold.co/300x200?text=Visit+Rwanda",
    excerpt:
      "From lush hills to wildlife parks, explore why Rwanda is East Africa's rising gem for adventure.",
    link: "/blog/visit-rwanda-2025",
  },
];

const BlogPreview = () => {
  return (
    <section className="blog-preview">
      <div className="container">
        <h2 className="section-title">Travel Tips & Blog</h2>

        <div className="carousel">
          {articles.map((article) => (
            <article className="blog-card" key={article.id}>
              <img
                src={article.image}
                alt={article.title}
                className="blog-image"
              />
              <h3 className="blog-title">{article.title}</h3>
              <p className="blog-excerpt">{article.excerpt}</p>
              <a href={article.link} className="read-more" aria-label={`Read more about ${article.title}`}>
                Read More →
              </a>
            </article>
          ))}
        </div>
      </div>

      <style>{`
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

        .blog-preview {
          padding: 2rem 1rem;
          background-color: var(--misty-green);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          
        }

        .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 8rem;
          color: var(--dark-forest);
          text-align: center;
          padding-
        }

        /* Carousel styles */
        .carousel {
          display: grid;
          grid-auto-flow: column;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding-bottom: 1rem;
          -webkit-overflow-scrolling: touch;
        }

        .carousel::-webkit-scrollbar {
          height: 9px;
        }
        .carousel::-webkit-scrollbar-thumb {
          background: var(--warm-amber);
          border-radius: 4px;
        }
        .carousel::-webkit-scrollbar-track {
          background: var(--stone-gray);
        }

        /* Blog card */
        .blog-card {
          background: var(--blue);
          border-radius: 0.5rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          padding: 1rem;
          transition: transform 0.3s ease;
          min-width: 280px;
        }
        .blog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }

        .blog-image {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          flex-shrink: 0;
        }

        .blog-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--dark-forest);
          margin-bottom: 0.5rem;
          flex-shrink: 0;
        }

        .blog-excerpt {
          font-size: 1rem;
          color: var(--charcoal-gray);
          line-height: 1.5;
          margin-bottom: 1rem;
          flex-grow: 1;
        }

        .read-more {
          font-weight: 600;
          color: var(--sunlight-gold);
          text-decoration: none;
          align-self: flex-start;
          transition: color 0.2s ease;
        }
        .read-more:hover,
        .read-more:focus {
          text-decoration: underline;
          color: var(--pine-green);
        }

        /* Responsive adjustments */
        @media (min-width: 1024px) {
          .carousel {
            grid-template-columns: repeat(4, 1fr);
            overflow-x: visible;
          }
        }

        @media (max-width: 480px) {
          .blog-card {
            min-width: 240px;
          }
        }
      `}</style>
    </section>
  );
};

export default BlogPreview;
