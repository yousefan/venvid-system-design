import React from 'react';
import styles from './VideoCard.module.css';
import { Video } from '../../types/video';
import { formatNumber } from '../../utils/formatNumber';

interface Props {
  video: Video;
}

const VideoCard: React.FC<Props> = ({ video }) => {
  return (
    <div className={`card ${styles.videoCard}`}>
      <div className="position-relative">
        <img
          src={video.thumbnailUrl}
          className={`card-img-top ${styles.thumbnail}`}
          alt={video.title}
        />
        <span className={`badge bg-dark ${styles.duration}`}>
          {video.duration}
        </span>
      </div>

      <div className="card-body">
        <h5 className="card-title">{video.title}</h5>

        {video.badges && (
          <div className="mb-2">
            {video.badges.map((badge, index) => (
              <span key={index} className="badge bg-secondary me-1">
                {badge}
              </span>
            ))}
          </div>
        )}

        <p className="card-text text-muted">
          {formatNumber(video.views)} views · {formatNumber(video.likes)} likes
        </p>

        <button className="btn btn-outline-primary w-100">View Video</button>
      </div>
    </div>
  );
};

export default VideoCard;
