import { useEffect, useState } from "react";
import getVacationStatus from "./getVacationStatus";
import { TerraHeading } from "./terra/src";

const VacationLocation = () => {
  const [location, setLocation] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    getVacationStatus()
      .then((location) => setLocation(location))
      .catch((errorMessage) => setErrorMessage(errorMessage));
  }, []);

  return (
    <div className="vacation-location">
      {errorMessage ? (
        <TerraHeading level={3}>
          Vacation service overloaded. Too many requests.
          {errorMessage}
        </TerraHeading>
      ) : (
        <>
          <TerraHeading level={3}>PM's current vacation location</TerraHeading>

          <span className="vacation-location-name">
            {!location ? "Loading ..." : location}
          </span>
        </>
      )}
    </div>
  );
};

export default VacationLocation;
