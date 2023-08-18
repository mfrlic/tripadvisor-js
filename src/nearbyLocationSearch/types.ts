export interface NearbyLocationSearchProps {
  /**
   * Latitude/Longitude pair to search for locations around.
   * @type {string}
   * @required
   * @example "42.3455,-71.10767"
   */
  latLong: string;
  /**
   * Length of the radius from the provided latitude/longitude pair to filter results.
   * @type {number}
   */
  radius?: number;
  /**
   * Unit for length of the radius. Valid options are "km", "mi", "m" (km=kilometers, mi=miles, m=meters)
   * @type {"km"|"mi"|"m"}
   */
  radiusUnit?: "km" | "mi" | "m";
  /**
   * The language in which to return results from the list of our Supported Languages.
   * @type {string}
   * @example "en" for English or "es" for Spanish
   */
  language?: string;
}
