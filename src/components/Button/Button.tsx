// Package imports
import cx from "classnames";

// Custom imports

type ButtonProps = {
  action?: () => void;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  variant?: "primary" | "secondary";
};

const Button = ({
  action,
  children,
  className,
  disabled,
  variant,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={action}
      className={cx(
        "w-fit font-header font-[500] py-2 px-8 rounded transition-colors duration-200",
        disabled
          ? "bg-[rgba(233,236,239.0.5)] text-[rgba(0,0,0,0.25)] cursor-not-allowed"
          : variant === "primary"
          ? "bg-[var(--deepMarine)] hover:bg-[var(--marine)] shadow-lg text-white cursor-pointer"
          : "bg-[var(--nonWhite)] hover:bg-[var(--lightGray)] border-[1px] border-[var(--deepMarine)] shadow-md text-[var(--deepMarine)] cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
