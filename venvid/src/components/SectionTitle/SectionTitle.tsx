import React from 'react';
import styles from './SectionTitle.module.css';

interface Props {
  title: string;
  subtitle?: string;
  actionText?: string;
  onActionClick?: () => void;
}

const SectionTitle: React.FC<Props> = ({ title, subtitle, actionText, onActionClick }) => {
  return (
    <div className={`d-flex justify-content-between align-items-center ${styles.sectionTitle}`}>
      <div>
        <h2 className="h4 mb-0">{title}</h2>
        {subtitle && <small className="text-muted">{subtitle}</small>}
      </div>
      {actionText && onActionClick && (
        <button className="btn btn-link text-decoration-none" onClick={onActionClick}>
          {actionText}
        </button>
      )}
    </div>
  );
};

export default SectionTitle;
