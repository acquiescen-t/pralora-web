import Config from "../api/Config";
import { Link } from "react-router-dom";
import ImageNotFound from "../assets/poster-not-found.jpg";
import type { Genre } from "../models/Genre";
import { useEffect, useState } from "react";
import type { Movie } from "../models/Movie";
import type { TvSeries } from "../models/TvSeries";
import api from "../api/InternalApi";
import { Endpoints } from "../api/Endpoints";

interface Props {
  genre: Genre;
}

const GenreCard = ({ genre }: Props) => {
  const [media, setMedia] = useState<Movie[] | TvSeries[]>([]);
  const [imgSrc, setImgSrc] = useState<string>("");

  useEffect(() => {
    api
      .get(Endpoints.findAllMediaByGenreTmdbId(genre.tmdbId.toString()))
      .then((response) => setMedia(response.data))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    for (var i = 0; i < media.length; i++) {
      if (media[i].poster_path != null) {
        setImgSrc(Config.tmdbPortraitMedia + media[i].poster_path);
        break;
      }
    }
  }, [media]);

  return (
    <>
      {media[0] && (
        <div className="cast-col">
          <div className="card text-center">
            <Link to={"/genres/" + genre.tmdbId} className="text-white">
              <img
                src={imgSrc}
                className="card-img-top"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = ImageNotFound;
                }}
              />
              <div className="card-body">
                <div className="bebas-medium">{genre.name}</div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default GenreCard;
