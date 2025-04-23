import React from 'react';
import { Video } from '../../types/video';
import VideoCard from '../VideoCard/VideoCard';
import styles from './VideoList.module.css';

interface Props {
  videos: Video[];
}

const VideoList: React.FC<Props> = ({ videos }) => {
  return (
    <div className={`row ${styles.videoList}`}>
      {videos.map((video) => (
        <div
          key={video.id}
          className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex"
        >
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  );
};

export default VideoList;
