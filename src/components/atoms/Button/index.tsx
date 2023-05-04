import React, { PropsWithoutRef, ComponentProps } from "react";
import classNames from "classnames";

type ButtonProps = ComponentProps<"button">;

interface ButtonComponentProps extends PropsWithoutRef<ButtonProps> {
  children: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  variant?: "primary" | "header";
}

function Button({
  children,
  href,
  icon,
  variant,
  ...props
}: ButtonComponentProps) {
  return (
    <button
      className={classNames(
        "button flex items-center justify-center",
        props.className,
        variant
      )}
      onClick={(e) => {
        if (href) return window.open(href);

        props.onClick && props.onClick(e);
      }}
    >
      <b>{children}</b>
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}

export default Button;
