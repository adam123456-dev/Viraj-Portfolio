/*
    Renders a skill as an icon (from imgPaths) with optional link to docs.
    Used on Resume (TechSkills) and in Project modals.
*/

import PropTypes from 'prop-types';
import { getSkillIcon } from '../constants/icons';

const iconSize = 'w-10 h-10 sm:w-11 sm:h-11';

function SkillIcon({ title, showLink = true, className = '' }) {
  const icon = getSkillIcon(title);

  if (!icon) {
    return (
      <span className={`flex flex-col items-center justify-center gap-2 ${className}`} title={title}>
        <span className={`${iconSize} flex items-center justify-center rounded bg-neutGray-800 dark:bg-neutGray-700 text-neutGray-100 dark:text-neutGray-100 text-7 font-heading font-bold`}>
          {title.slice(0, 2)}
        </span>
        <span className="text-center text-7 sm:text-6 hyphens-auto">{title}</span>
      </span>
    );
  }

  const content = (
    <>
      <span className="text-center text-7 sm:text-6 hyphens-auto">{title}</span>
      <img
        src={icon.path}
        alt={title}
        className={`${iconSize} object-contain`}
        loading="lazy"
        onError={(e) => {
          e.target.style.display = 'none';
          const fallback = e.target.nextElementSibling;
          if (fallback) fallback.classList.remove('hidden');
        }}
      />
      <span className={`${iconSize} hidden items-center justify-center rounded bg-neutGray-800 dark:bg-neutGray-700 text-neutGray-100 text-7 font-heading font-bold`} aria-hidden="true">
        {title.slice(0, 2)}
      </span>
    </>
  );

  const wrapperClass = `flex flex-col items-center justify-center gap-2 ${className}`;

  if (showLink && icon.website) {
    return (
      <a
        href={icon.website}
        target="_blank"
        rel="noopener noreferrer"
        className={`${wrapperClass} transition opacity-90 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primBlue-500 focus:ring-offset-2 dark:focus:ring-offset-neutGray-900 rounded`}
        title={`${title} (opens in new tab)`}
      >
        {content}
      </a>
    );
  }

  return (
    <span className={wrapperClass} title={title}>
      {content}
    </span>
  );
}

SkillIcon.propTypes = {
  title: PropTypes.string.isRequired,
  showLink: PropTypes.bool,
  className: PropTypes.string,
};

export default SkillIcon;
