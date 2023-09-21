import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieapiService } from 'src/app/services/movieapi.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{
  constructor(private apiService:MovieapiService, private router:ActivatedRoute){}
  getMovieResult:any = [];
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId)
    this.getMovie(getParamId);
  }
  getMovie(id:any){
    this.apiService.getMovieDetails(id).subscribe((result)=>{
      this.getMovieResult=result;
      
    })
  }
}
