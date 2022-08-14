export interface gamesResponse {
  counts: number;
  results: games[];
  previous: undefined; 
}

export interface games {
  id: number;
  slug: string;
  name: string;
  released: Date;
  tba: boolean;
  background_image: {};
  rating: number;
  rating_top: number;
  ratings: [];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: {};
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: Date;
  user_game: undefined;
  reviews_count: number;
  platforms: Plarforms[];
  parent_platforms: [];
  genres: Genres[];
  stores: [];
  clip: undefined;
  tags: [];
  esrb_rating: {};
  short_screenshots: Screenshots[];
};

export interface Plarforms { 
  id: number;
  name: string;
  slug: string;
  image: undefined;
  year_end: undefined;
  year_start: undefined;
  games_count: number;
  image_background: {};
};

export interface Genres { 
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: {};
};
export interface Screenshots {
  id: number;
  image: {};
 };
