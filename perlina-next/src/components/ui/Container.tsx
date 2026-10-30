import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Conteneur page (max-width + gouttières). */
export default function Container({ children, className = "" }: ContainerProps) {
  return <div className={["container", className].filter(Boolean).join(" ")}>{children}</div>;
}
