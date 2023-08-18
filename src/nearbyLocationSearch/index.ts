import {
  TRIPADVISOR_API_KEY,
  TRIPADVISOR_API_URL,
  fetchOptions,
} from "@/constants";

import type { LocationSearchResponse } from "@/locationSearch/types";
import parseUrlSearchParams from "@/utils";
import type { NearbyLocationSearchProps } from "./types";

export default function nearbyLocationSearch(
  props: NearbyLocationSearchProps,
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
