import React, { PropsWithoutRef, ComponentProps } from "react";
import classNames from "classnames";
import Router from "next/router";

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
        if (href) {
          // check if link starts with slash or hashtag
          const internalLink = href.match(/^(\/|#)/);
          if (internalLink) return Router.push(href);

          return window.open(href, "_blank", "noopener noreferrer");
        }

        props.onClick && props.onClick(e);
      }}
    >
      <b>{children}</b>
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}

export default Button;
