import type { TvSeries } from "../models/TvSeries";
import type { Movie } from "../models/Movie";
import Config from "../api/Config";
import { Link } from "react-router-dom";
import { PlayCircleIcon } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import MediaInfo from "./MediaInfo";

interface Props {
  media: Movie | TvSeries;
}

const PreviewMedia = ({ media }: Props) => {
  return (
    <div className="col-6 py-5">
      <div className="card">
        {media ? (
          <div>
            <div className="backdrop-container position-relative d-flex justify-content-end">
              <AnimatePresence mode="wait">
                <motion.img
                  key={media.backdrop_path}
                  src={Config.tmdbLandscapeMedia + media.backdrop_path}
                  className="img-fluid rounded position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
            <MediaInfo media={media} />
            <div className="pt-2">
              <div className="row">
                <div className="col d-flex">
                  <Link to={"/media/tmdbId/" + media.tmdbId}>
                    <button
                      type="button"
                      className="btn btn-sm btn-danger pt-1"
                    >
                      <PlayCircleIcon size={20} className="me-2" />
                      <span className="bebas">Watch</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

export default PreviewMedia;
