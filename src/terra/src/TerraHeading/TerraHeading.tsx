export interface Props {
  dataTestId?: string;
  children: React.ReactNode;
  level: HeadingLevel;
}

export type HeadingLevel = 1 | 2 | 3 | 4;

const TerraHeading = ({ children, level = 1 }: Props) => {
  if (level === 1) {
    return <h1 style={{ margin: "0px" }}>{children}</h1>;
  }

  if (level === 2) {
    return <h2 style={{ margin: "0px" }}>{children}</h2>;
  }

  if (level === 3) {
    return <h3 style={{ margin: "0px" }}>{children}</h3>;
  }

  if (level === 4) {
    return <h4 style={{ margin: "0px" }}>{children}</h4>;
  }

  // What do when the wrong level is passed?
  console.error("Unknown heading level");
  return null;
};

export default TerraHeading;
