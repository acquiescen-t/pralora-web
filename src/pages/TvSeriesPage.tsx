import { useEffect, useState } from "react";
import type { TvSeries } from "../models/TvSeries";
import api from "../api/InternalApi";
import { Endpoints } from "../api/Endpoints";
import type { Movie } from "../models/Movie";
import MediaCard from "../components/MediaCard";
import PreviewMedia from "../components/PreviewMedia";

export default function TvSeriesPage() {
  const [tvSeries, setTvSeries] = useState<TvSeries[]>([]);
  useEffect(() => {
    api
      .get(Endpoints.getAllTvSeries())
      .then((response) => setTvSeries(response.data))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    setSelectedMedia(tvSeries[0]);
  }, [tvSeries]);

  const [selectedMedia, setSelectedMedia] = useState<Movie | TvSeries>();

  const handleSelectMedia = (media: Movie | TvSeries) => {
    setSelectedMedia(media);
  };

  return (
    <div className="row">
      <div className="col-6 py-4 scrollable-section">
        <div className="page-header">All Tv Series</div>
        <div className="row g-3">
          {tvSeries.map((tv) => (
            <div key={tv.id} className="col-12 col-md-3">
              <MediaCard media={tv} onSelectMedia={handleSelectMedia} />
            </div>
          ))}
        </div>
      </div>
      {selectedMedia && <PreviewMedia media={selectedMedia}></PreviewMedia>}
    </div>
  );
}
