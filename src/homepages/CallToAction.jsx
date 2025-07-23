import React from "react";

const articles = [
  {
    id: 1,
    title: "Top 5 Must-Visit Safari Destinations",
    image: "https://placehold.co/300x200?text=Safari+Destinations",
    excerpt:
      "Discover the most breathtaking safari spots in Africa for unforgettable wildlife experiences.",
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
        .blog-preview {
          padding: 3rem 1rem;
          background-color: #f9fafb;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #1f2937;
          text-align: center;
        }

        .blog-preview {
          padding: 3rem 1rem;
          background-color: #fff4e6; /* warm beige background */
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
          height: 8px;
        }
        .carousel::-webkit-scrollbar-thumb {
          background: #f97316;
          border-radius: 4px;
        }
        .carousel::-webkit-scrollbar-track {
          background: #f3f4f6;
        }

        /* Blog card */
        .blog-card {
          background: #fff;
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
          color: #1f2937;
          margin-bottom: 0.5rem;
          flex-shrink: 0;
        }

        .blog-excerpt {
          font-size: 1rem;
          color: #4b5563;
          line-height: 1.5;
          margin-bottom: 1rem;
          flex-grow: 1;
        }

        .read-more {
          font-weight: 600;
          color: #f97316;
          text-decoration: none;
          align-self: flex-start;
          transition: color 0.2s ease;
        }
        .read-more:hover,
        .read-more:focus {
          text-decoration: underline;
          color: #ea580c;
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
