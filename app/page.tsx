import MoviesCarousel from "@/components/MoviesCarousel";
import { Button } from "@/components/ui/button";
import { getUpcomingMovies } from "@/lib/getMovies";
import Image from "next/image";

export default async function Home() {

  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main>
      {/* CarrouselBanneerWrapper*/}
      <div className="flex flex-col space-y-2 xl:mt-48">
       <MoviesCarousel movies={upcomingMovies} title="Upcoming"/> 
        {/*MoviesCarrousel movies={...} title="Upcoming"*/}
        {/*MoviesCarrousel movies={...} title="Upcoming"*/}
      </div>
    </main>
  );
}
