const getVacationStatus = () => {
  const promise = new Promise<string>((resolve, reject) => {
    window.setTimeout(() => resolve("Spain"), 2000);
  });

  return promise;
};

export default getVacationStatus;
