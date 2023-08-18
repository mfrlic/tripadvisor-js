export default function parseUrlSearchParams(data: {
  [key: string]: string | number | boolean | undefined | null;
}): URLSearchParams {
  const urlSearchParams = new URLSearchParams();

  // Loop through each property of the data object and add them to the URLSearchParams.
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const value = data[key];

      if (value !== undefined && value !== null) {
        urlSearchParams.append(key, String(value));
      }
    }
  }

  return urlSearchParams;
}
