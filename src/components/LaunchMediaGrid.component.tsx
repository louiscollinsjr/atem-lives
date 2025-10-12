import React from 'react';

import './launch-media-grid.styles.css';

export type LaunchMediaItemLayout = 'square' | 'tall' | 'wide' | 'feature';

export interface LaunchMediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  poster?: string;
  layout?: LaunchMediaItemLayout;
}

type LaunchMediaGridWidth = 'full' | 'maxed';

interface LaunchMediaGridProps {
  items: LaunchMediaItem[];
  width?: LaunchMediaGridWidth;
}

const LaunchMediaGrid: React.FC<LaunchMediaGridProps> = ({ items, width = 'maxed' }) => {
  return (
    <section className="launch-media-grid__outer">
      <div className={`launch-media-grid launch-media-grid--${width}`}>
        {items.map((item, index) => {
          const layoutClass = item.layout ? `launch-media-grid__item--${item.layout}` : '';
          return (
            <div key={`${item.type}-${index}`} className={`launch-media-grid__item ${layoutClass}`}>
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt ?? ''}
                  loading="lazy"
                  className="launch-media-grid__media"
                />
              ) : (
                <video
                  src={item.src}
                  poster={item.poster}
                  className="launch-media-grid__media"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LaunchMediaGrid;
