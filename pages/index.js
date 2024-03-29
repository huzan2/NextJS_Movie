import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`api/movies`)).json();
      setMovies(results);
    })();
  }, []);
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {movies?.map((movie) => (
        <Link
          onClick={() => onClick(movie.id, movie.original_title)}
          href={{
            pathname: `movies/${movie.original_title}/${movie.id}`,
          }}
          key={movie.id}
        >
          <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        </Link>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
