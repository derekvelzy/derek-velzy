// Package imports
import cx from "classnames";
// Custom imports

type LinkProps = {
  href?: string;
  className?: string;
  children?: React.ReactNode;
};

const Link = ({ href, className, children }: LinkProps) => {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      className={cx(
        "bg-[var(--deepMarine)] w-fit text-white font-header font-[500] py-2 px-8 rounded shadow-lg hover:bg-[var(--marine)] transition-colors duration-200",
        className
      )}
    >
      {children}
    </a>
  );
};

export default Link;
