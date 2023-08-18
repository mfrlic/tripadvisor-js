export interface LocationReviewsResponse {
  data: LocationReview[];
}

export interface LocationReview {
  /**
   * The Tripadvisor ID for the review.
   * @type {number}
   */
  id: number;

  /**
   * The language of the review.
   * @type {string}
   */
  lang: string;

  /**
   * Unique Tripadvisor location ID of the destination or POI.
   * @type {number}
   */
  location_id: number;

  /**
   * The date the review was published to Tripadvisor.
   * @type {string}
   */
  published_date: string;

  /**
   * Overall rating for this POI. Not applicable to geographic locations.
   * Rating levels are defined as follows:
   * 5: Excellent
   * 4: Very good
   * 3: Average
   * 2: Poor
   * 1: Terrible
   * @type {number}
   */
  rating: number;

  /**
   * The number of helpful votes.
   * @type {number}
   */
  helpful_votes: number;

  /**
   * The URL to the bubble rating image for this location.
   * @type {string}
   */
  rating_image_url: string;

  /**
   * The URL to the review.
   * @type {string}
   */
  url: string;

  /**
   * The Trip type of the review (Business, Couples, Family, Friends, Solo).
   * @type {string}
   */
  trip_type: string;

  /**
   * The travel date of the review.
   * @type {string}
   */
  travel_date: string;

  /**
   * The full text of the review.
   * @type {string}
   */
  text: string;

  /**
   * The title of this review.
   * @type {string}
   */
  title: string;

  /**
   * The Management Response to this review, if one exists.
   * @type {string}
   */
  owner_response: string;

  /**
   * True or false depending on whether this is a machine-translated review.
   * (Outputs only if the partner is configured for inclusion of machine-translated reviews)
   * @type {boolean}
   */
  is_machine_translated: boolean;

  /**
   * The user who submitted the review.
   * @type {TripadvisorUser}
   */
  user: TripadvisorUser;

  /**
   * Subratings for this review.
   * @type {object}
   */
  subratings: object;
}

export interface TripadvisorUser {
  /**
   * The username that appears on the Tripadvisor website for the user
   * @type {string}
   */
  username: string;

  /**
   * The user's location
   * @type {{
   * name: string;
   * id: string;
   * }}
   */
  user_location: {
    name: string;
    id: string;
  };

  /**
   * The Review Count that appears on the Tripadvisor website for the user
   * @type {number}
   */
  review_count: number;

  /**
   * The Reviewer Badge that appears on the Tripadvisor website for the user
   * @type {string}
   */
  reviewer_badge: string;

  /**
   * The user avatar object
   * @type {string}
   */
  avatar: object;
}
