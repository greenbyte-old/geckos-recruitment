import { render, screen } from "@testing-library/react";
import TerraHeading from "./TerraHeading";

describe("TerraHeading", () => {
  it("should render", () => {
    render(<TerraHeading level={1}>Important notice</TerraHeading>);
    const headingElement = screen.getByText(/Important notice/i);
    expect(headingElement.tagName).toBe("H1");
  });
});
