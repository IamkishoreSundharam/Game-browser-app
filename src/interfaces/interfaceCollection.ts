import NoImagePlaceHolder from "../assets/ImagePlaceHolder.webp";
//The below are interfaces for useFetchGmes hook component
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top:number;
}
// export interface FetchedData {
//   count: number;
//   results: Game[];
// }

// the interfaces below are for Genre
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
// export interface FetchedGenre {
//   count: number;
//   results: Genre[];
// }

// The below interface is for Generic Fetch data hook
export interface FetchData<T> {
  results: T[];
}

//Here is a function to convert a image resolution
export const imageResolver = (url: string) => {
  if (url === null) return NoImagePlaceHolder;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
