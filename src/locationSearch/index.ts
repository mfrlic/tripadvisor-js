import {
  TRIPADVISOR_API_KEY,
  TRIPADVISOR_API_URL,
  fetchOptions,
} from "../constants";
import parseUrlSearchParams from "../utils";

import type { LocationSearchProps, LocationSearchResponse } from "./types";

export default function locationSearch(
  props: LocationSearchProps,
  additionalOptions?: RequestInit
) {
  const searchParams = parseUrlSearchParams({
    ...props,
    key: TRIPADVISOR_API_KEY,
  });

  return fetch(`${TRIPADVISOR_API_URL}/location/search?${searchParams}`, {
    ...fetchOptions,
    ...additionalOptions,
  }).then((res) => res.json()) as Promise<LocationSearchResponse>;
}
