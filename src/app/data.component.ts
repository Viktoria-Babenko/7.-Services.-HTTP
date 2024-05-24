import {Component} from '@angular/core';
import {Movie} from './Movie';
       
@Component({
    selector: 'data-comp',
    template: `<div class="posts2" [ngStyle]="{'display':title == undefined ? 'none' : 'flex' }">
                   <h1>{{title}}</h1>
                   <img class="img" src="{{poster}}">
                   <table>
                   <tr> <td>Year: </td> <td>"{{year}}"</td></tr>
                   <tr> <td>Released: </td> <td>"{{released}}"</td></tr>
                   <tr> <td>Runtime: </td> <td>"{{runtime}}"</td></tr>
                   <tr> <td>Genre: </td> <td>"{{genre}}"</td></tr>
                   <tr> <td>Director: </td> <td>"{{director}}"</td></tr>
                   <tr> <td>Writer: </td> <td>"{{writer}}"</td></tr>
                   <tr> <td>Actors: </td> <td>"{{actors}}"</td></tr>
                   <tr> <td>Plot: </td> <td>"{{plot}}"</td></tr>
                   <tr> <td>Language: </td> <td>"{{language}}"</td></tr>
                   <tr> <td>Country: </td> <td>"{{country}}"</td></tr>
                   <tr> <td>Awards: </td> <td>"{{awards}}"</td></tr>
                   </table>
            </div>`,
    styleUrls: ['./app.component.css']
})

export class DataComponent {
    title: string;
    year : string;
    poster: string;
    released: string;
    runtime: string;
    genre: string;
    director: string;
    writer: string;
    actors: string;
    plot: string;
    language: string;
    country:string;
    awards:string;
    styleOne: string = "{'display':'none'}";
   
    SetContmp(obj: Movie){
        console.log(obj);
        this.title = obj.Title;
        this.released = obj.Released;
        this.runtime = obj.Runtime;
        this.genre = obj.Genre;
        this.language = obj.Language;
        this.year = obj.Year;
        this.director = obj.Director;
        this.writer = obj.Writer;
        this.actors = obj.Actors;
        this.plot = obj.Plot;
        this.poster = obj.Poster; 
        this.country = obj.Country;
        this.awards = obj.Awards;
    }
}