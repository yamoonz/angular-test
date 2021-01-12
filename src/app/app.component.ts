import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators'; 
import { title } from 'process';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { Products } from './products/products.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature='product';
  products= 
    {
      name : "Cartzilla",
      title : "by Themes ",
      rating : "five stars (22)",
      img:"",
    }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
      

  constructor(private http: HttpClient){

  }
  ngOnInit (){

  }

  onCreatePost (postData:{title:string; content: string}){
    this.http.post('https://angular-test-a1a5f-default-rtdb.firebaseio.com/posts.json',
    postData
    )
    .subscribe(responseData => {
      console.log(responseData);
    });
  }
  onFetchPosts(){
    this.fetchPosts();

  }
  onClearPosts(){

  }
private fetchPosts (){
  this.http.get
  ('https://angular-test-a1a5f-default-rtdb.firebaseio.com/posts.json')
  .pipe( 
      map(responseData => {
        const postsArray =[];
        for ( const key in responseData){
          if (responseData.hasOwnProperty(key)){
            postsArray.push({ ...responseData[key], id:key});
          }
        }
        return postsArray;
      })
  )
  .subscribe(posts=>{
    console.log(posts);
    });
  }
}
