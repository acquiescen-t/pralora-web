import { useState } from "react";
import type { Movie } from "../models/Movie";
import type { TvSeries } from "../models/TvSeries";

const GenrePage = () => {
  const [media, setMedia] = useState<Movie | TvSeries>();
  return <div>GenrePage</div>;
};

export default GenrePage;
