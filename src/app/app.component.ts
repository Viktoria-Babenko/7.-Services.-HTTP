import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {DataComponent} from "./data.component"
import {HttpService } from "./http.servise";
import {Movie} from './Movie';

@Component({
    selector: 'my-app',
    template: `<div class="body">
                    <div class="posts1">
                       <div > Ehter the title of the movie:</div>
                    </div>
                    <data-comp ></data-comp>
                    <div class="posts3">
                        <input type="text"  [(ngModel)]="name" >
                        <button (click)="onSelect()">Search</button>
                    </div>
               <div>`,
    providers: [HttpService],
    styleUrls: ['./app.component.css']

})

export class AppComponent { 
    name : string = "";
    @ViewChild(DataComponent)
    private mov: DataComponent;
    movie: Movie  = new Movie();

    constructor(private httpService: HttpService){}
    @Output() onChanged = new EventEmitter<string>();

    onSelect(){
        this.httpService.getData(this.name).subscribe(
            {
                next: (data: Movie) => {
                    console.log(data);
                    this.movie = data ;
                    console.log(this.movie);
                    this.mov.SetContmp(this.movie);
                }
            });
    }
}
