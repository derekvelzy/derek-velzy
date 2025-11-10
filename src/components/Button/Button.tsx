// Package imports
import cx from "classnames";

// Custom imports
import styles from "./Button.module.scss";

type ButtonProps = {
  id?: string;
  action?: () => void;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  id,
  action,
  children,
  className,
  disabled,
  variant = "primary",
  ariaLabel,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      id={id}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={action}
      aria-label={ariaLabel}
      type={type}
      className={cx(
        styles["button"],
        {
          [styles["button_disabled"]]: disabled,
          [styles["button_secondary"]]: variant !== "primary",
        },

        // disabled
        //   ? "bg-[rgba(233,236,239.0.5)] text-[rgba(0,0,0,0.25)] cursor-not-allowed"
        //   : variant === "primary"
        //   ? "bg-[var(--deepMarine)] hover:bg-[var(--marine)] shadow-lg text-white cursor-pointer"
        //   : "bg-[var(--nonWhite)] hover:bg-[var(--lightGray)] border-[1px] border-[var(--deepMarine)] shadow-md text-[var(--deepMarine)] cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
