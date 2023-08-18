import {
  TRIPADVISOR_API_KEY,
  TRIPADVISOR_API_URL,
  fetchOptions,
} from "@/constants";
import parseUrlSearchParams from "@/utils";
import { LocationPhotosResponse } from "./types";

export default function getLocationPhotos(
  locationId: string,
  additionalOptions?: RequestInit
) {
  const searchParams = parseUrlSearchParams({
    key: TRIPADVISOR_API_KEY,
  });

  return fetch(
    `${TRIPADVISOR_API_URL}/location/${locationId}/photos?${searchParams}`,
    {
      ...fetchOptions,
      ...additionalOptions,
    }
  ).then((res) => res.json()) as Promise<LocationPhotosResponse>;
}
