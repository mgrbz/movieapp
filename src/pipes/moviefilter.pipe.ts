import { Pipe, PipeTransform } from "@angular/core";
import { IMovie } from "src/types/movie";


@Pipe({
  name: 'moviefilter'
})
export class MovieFilterPipe implements PipeTransform{
  transform(value: IMovie[], filterText: string) : IMovie[] | null{
    console.log('filterText: ', filterText);
    console.log('value: ', value);
    if (!value) return null

    if(filterText){
      filterText = filterText.toLowerCase();
      return value.filter((movie: IMovie) => movie.title.toLowerCase().includes(filterText) || movie.description.toLowerCase().includes(filterText));
    }
    return value;
  }
}



