import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/InternalApi";
import { Endpoints } from "../api/Endpoints";
import {
  MediaController,
  MediaControlBar,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaMuteButton,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaFullscreenButton,
} from "media-chrome/react";
import ReactPlayer from "react-player";
import type { Episode } from "../models/Episode";
import type { Movie } from "../models/Movie";
import MediaInfo from "../components/MediaInfo";
import CastInfo from "../components/CastInfo";

const WatchPage = () => {
  const { tmdbId } = useParams() as { tmdbId: string };
  const [playableMedia, setPlayableMedia] = useState<Movie | Episode>();
  const [title, setTitle] = useState<string>("");
  const [playableMediaUrl, setPlayableMediaUrl] = useState<string | null>(null);

  /* Retrieve media information */
  useEffect(() => {
    api
      .get(Endpoints.findMovieByTmdbId(tmdbId))
      .then((response) => setPlayableMedia(response.data))
      .catch((error) => console.error(error));

    if (!playableMedia)
      api
        .get(Endpoints.findByEpisodeTmdbId(tmdbId))
        .then((response) => setPlayableMedia(response.data))
        .catch((error) => console.error(error));
  }, []);
  /* Update browser tab title, modify filePath to point to web server */
  useEffect(() => {
    if (playableMedia) {
      setTitle(
        "title" in playableMedia ? playableMedia.title : playableMedia.name
      );
      document.title = title;
      setPlayableMediaUrl(
        playableMedia.filePath
          .replace("G:\\Media", "http://localhost:8081/")
          .replace(/ /g, "%20")
      );
    }
  }, [playableMedia]);

  return (
    <div className="watch-page py-5">
      {playableMediaUrl && (
        <>
          <MediaController
            style={{
              width: "100%",
            }}
          >
            <ReactPlayer
              className="react-player"
              slot="media"
              src={playableMediaUrl}
              controls={false}
              width="100%"
              height="100%"
              autoPlay={true}
            ></ReactPlayer>
            <MediaControlBar>
              <MediaPlayButton />
              <MediaSeekBackwardButton seekOffset={10} />
              <MediaSeekForwardButton seekOffset={10} />
              <MediaTimeRange />
              <MediaTimeDisplay showDuration />
              <MediaMuteButton />
              <MediaVolumeRange />
              <MediaPlaybackRateButton />
              <MediaFullscreenButton />
            </MediaControlBar>
          </MediaController>
          {playableMedia && <MediaInfo media={playableMedia}></MediaInfo>}
          {playableMedia && <CastInfo media={playableMedia}></CastInfo>}
        </>
      )}
      {!playableMediaUrl && <span className="text-white">Error</span>}
    </div>
  );
};

export default WatchPage;
