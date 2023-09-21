import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieapiService } from 'src/app/services/movieapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(private service:MovieapiService){}
  searchResult:any=[];
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  })
  submitForm(){
    this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
      this.searchResult = result.results;
    })
  }
}
