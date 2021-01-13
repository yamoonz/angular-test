import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators'; 
import { title } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature='product';
  products=[ 
    {
      name : "Cartzilla - Digital Market",
      title : "by MadrasThemes in Wooco ",
      description:"Multi Vendor Digital Market Place With Dokan",
      price:"59$",
      rating:"five stars (22) ",
      sales :"371 sales",
      lastUpdated:" last updated: 16 Dec 20",
      imagePath:"https://tutsflow.com/wp-content/uploads/2020/12/cartzilla-wp-theme.jpg",
    },
    {
      name : "Cartzilla - Digital Market",
      title : "by MadrasThemes in Wooco ",
      description:"Multi Vendor Digital Market Place With Dokan",
      price:"59$",
      rating:"five stars (22) ",
      sales :"371 sales",
      lastUpdated:" last updated: 16 Dec 20",
      imagePath:"https://tutsflow.com/wp-content/uploads/2020/12/cartzilla-wp-theme.jpg",
    }
  ]
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
