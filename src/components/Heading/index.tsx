import styles from "./styles.module.css";

type HeadingProps = {
  children: React.ReactNode;
};

//desestructuring the children prop
export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
