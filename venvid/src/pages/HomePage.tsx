import React from 'react';
import VideoList from '../components/VideoList/VideoList';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import { Video } from '../types/video';

const recommendedVideos: Video[] = [
  {
    id: '1',
    title: 'Exploring the Alps',
    thumbnailUrl: 'https://cdn.prod.website-files.com/6424a84a1a908839d5724077/674db4b94f6966c47d740174_video-thumbnails-1.webp',
    views: 125000,
    likes: 3000,
    duration: '12:45',
    badges: ['HD', 'NEW'],
  },
  {
    id: '2',
    title: 'React Tutorial for Beginners',
    thumbnailUrl: 'https://cdn.prod.website-files.com/6424a84a1a908839d5724077/674db4b94f6966c47d740174_video-thumbnails-1.webp',
    views: 890000,
    likes: 12000,
    duration: '08:22',
    badges: ['HD'],
  },
  {
    id: '2',
    title: 'React Tutorial for Beginners',
    thumbnailUrl: 'https://cdn.prod.website-files.com/6424a84a1a908839d5724077/674db4b94f6966c47d740174_video-thumbnails-1.webp',
    views: 890000,
    likes: 12000,
    duration: '08:22',
    badges: ['HD'],
  },
  {
    id: '2',
    title: 'React Tutorial for Beginners',
    thumbnailUrl: 'https://cdn.prod.website-files.com/6424a84a1a908839d5724077/674db4b94f6966c47d740174_video-thumbnails-1.webp',
    views: 890000,
    likes: 12000,
    duration: '08:22',
    badges: ['HD'],
  },

];

const newVideos: Video[] = [
  {
    id: '3',
    title: 'How to Bake Sourdough Bread',
    thumbnailUrl: 'https://cdn.prod.website-files.com/6424a84a1a908839d5724077/674db4b94f6966c47d740174_video-thumbnails-1.webp',
    views: 45000,
    likes: 800,
    duration: '10:30',
    badges: ['NEW'],
  },
  {
    id: '4',
    title: 'Top 10 Programming Tips',
    thumbnailUrl: 'https://cdn.prod.website-files.com/6424a84a1a908839d5724077/674db4b94f6966c47d740174_video-thumbnails-1.webp',
    views: 78000,
    likes: 1900,
    duration: '09:15',
  },
  {
    id: '4',
    title: 'Top 10 Programming Tips',
    thumbnailUrl: 'https://cdn.prod.website-files.com/6424a84a1a908839d5724077/674db4b94f6966c47d740174_video-thumbnails-1.webp',
    views: 78000,
    likes: 1900,
    duration: '09:15',
  },
  {
    id: '4',
    title: 'Top 10 Programming Tips',
    thumbnailUrl: 'https://cdn.prod.website-files.com/6424a84a1a908839d5724077/674db4b94f6966c47d740174_video-thumbnails-1.webp',
    views: 78000,
    likes: 1900,
    duration: '09:15',
  },
  {
    id: '4',
    title: 'Top 10 Programming Tips',
    thumbnailUrl: 'https://cdn.prod.website-files.com/6424a84a1a908839d5724077/674db4b94f6966c47d740174_video-thumbnails-1.webp',
    views: 78000,
    likes: 1900,
    duration: '09:15',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <SectionTitle
        title="Recommended Videos"
        subtitle="Tailored just for you"
        actionText="See All"
        onActionClick={() => alert('Go to recommended')}
      />
      <VideoList videos={recommendedVideos} />

      <SectionTitle
        title="New Videos"
        subtitle="Latest content just uploaded"
        actionText="See All"
        onActionClick={() => alert('Go to new videos')}
      />
      <VideoList videos={newVideos} />
    </div>
  );
};

export default HomePage;