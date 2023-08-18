export interface LocationImages {
  thumbnail: {
    height: number;
    width: number;
    url: string;
  };
  small: {
    height: number;
    width: number;
    url: string;
  };
  medium: {
    height: number;
    width: number;
    url: string;
  };
  large: {
    height: number;
    width: number;
    url: string;
  };
  original: {
    height: number;
    width: number;
    url: string;
  };
}

export interface UserData {
  username: string;
}

export interface SourceData {
  name: string;
  localized_name: string;
}

export interface LocationPhotosData {
  id: number;
  is_blessed: boolean;
  caption: string;
  published_date: string;
  images: LocationImages;
  album: string;
  source: SourceData;
  user?: UserData;
}

export interface LocationPhotosResponse {
  data: LocationPhotosData[];
}
