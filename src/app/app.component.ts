import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators'; 

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
      tags:"Electronics, Foo, Bar ",
      description:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
      price:"59$",
      rating:"five stars (22) ",
      sales :"371 sales",
      lastUpdated:"  16 Dec 20",
      imagePath:"https://tutsflow.com/wp-content/uploads/2020/12/cartzilla-wp-theme.jpg",
    },
    {
      name : "Special Offer",
      title : "Home For Sell ",
      tags:"Home, Foo, Bar ",
      description:"Lorem Spum reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      price:"58999$",
      rating:"five stars (22) ",
      sales :"71 sales",
      lastUpdated:" 13 Jan 21",
      imagePath:"https://www.propertyturkey.com/uploads/realestate/larg/bursa_villa_2_5.jpg",
    },
    {
      name : "Special Offer",
      title : "Kitchen For Sell ",
      tags:"Kitchen, Foo, Bar ",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      price:"999$",
      rating:"five stars (22) ",
      sales :"50 sales",
      lastUpdated:"  13 Jan 21",
      imagePath:"https://www.halcyoninteriors.com/assets/IMG_4831-870x653.jpg",
    },
  
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
