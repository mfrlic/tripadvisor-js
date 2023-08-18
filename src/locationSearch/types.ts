export interface LocationSearchProps {
  /**
   * Text to use for searching based on the name of the location.
   * @type {string}
   * @required
   */
  searchQuery: string;
  /**
   * Filters result set based on property type. Valid options are "hotels", "attractions", "restaurants", and "geos"
   * @type {LocationCategory}
   */
  category?: LocationCategory;
  /**
   * Phone number to filter the search results by (this can be in any format with spaces and dashes but without the "+" sign at the beginning)
   * @type {string}
   */
  phone?: string;
  /**
   * Address to filter the search results by.
   * @type {string}
   */
  address?: string;
  /**
   * Latitude/Longitude pair to scope down the search around a specific point.
   * @type {string}
   * @example "42.3455,-71.10767"
   */
  latLong?: string;
  /**
   * Length of the radius from the provided latitude/longitude pair to filter results.
   * @type {number}
   */
  radius?: number;
  /**
   * Unit for length of the radius. Valid options are "km", "mi", "m" (km=kilometers, mi=miles, m=meters)
   * @type {RadiusUnit}
   */
  radiusUnit?: RadiusUnit;
  /**
   * The language in which to return results from the list of our Supported Languages.
   * @type {string}
   * @example "en" for English or "es" for Spanish
   */
  language?: string;
}

export type RadiusUnit = "km" | "mi" | "m";

export type LocationCategory =
  | "hotels"
  | "attractions"
  | "restaurants"
  | "geos";

export interface LocationSearchResponse {
  /**
   * An array of objects representing location data.
   * @type {LocationData[]}
   */
  data: LocationData[];
}

export interface LocationData {
  /**
   * A unique identifier for a location on Tripadvisor.
   * This is to be used in the other endpoints that require a location ID.
   * @type {number}
   */
  location_id: number;

  /**
   * Name of the location.
   * @type {string}
   */
  name: string;

  /**
   * Distance, in miles, this location is from the passed-in LatLong parameters.
   * @type {string}
   */
  distance: string;

  /**
   * Rating of the location, if applicable.
   * @type {string}
   */
  rating: string;

  /**
   * Direction this location is from the passed-in LatLong parameters.
   * @type {string}
   */
  bearing: string;

  /**
   * Object consisting of various address data.
   * @type {AddressObject}
   */
  address_obj: AddressObject;
}

export interface AddressObject {
  /**
   * Street address of the location.
   * @type {string}
   */
  street1: string;

  /**
   * Street address of the location.
   * @type {string}
   */
  street2: string;

  /**
   * City of the location.
   * @type {string}
   */
  city: string;

  /**
   * State of the location.
   * @type {string}
   */
  state: string;

  /**
   * Country of the location.
   * @type {string}
   */
  country: string;

  /**
   * Postal code of the location.
   * @type {string}
   */
  postalcode: string;

  /**
   * Full address of the location.
   * @type {string}
   */
  address_string: string;

  /**
   * Phone number of the location.
   * @type {string}
   */
  phone: string;

  /**
   * Latitude of the location.
   * @type {number}
   */
  latitude: number;

  /**
   * Longitude of the location.
   * @type {number}
   */
  longitude: number;
}
