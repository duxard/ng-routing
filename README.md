# NgRouting

Add routes:
```javascript
const routes: Routes = [
  { path: '', redirectTo: '/one', pathMatch: 'full' },
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'three', component: ThreeComponent },
  { path: 'four', component: FourComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostComponent },

  // child routes:

  { path: 'about', component: AboutComponent, children: [
      { path: 'extra', component: AboutExtraComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```
Add navigation (navbar):

````
<ul class="navbar-main">
  <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a routerLink="/one" >One</a></li>
  <li routerLinkActive="active"><a routerLink="/two">Two</a></li>
  <li routerLinkActive="active"><a [routerLink]="['/three']">Three</a></li>
  <li routerLinkActive="active"><a [routerLink]="['/four']">Four</a></li>
  <li routerLinkActive="active"><a [routerLink]="['/posts']">Posts</a></li>
  <li routerLinkActive="active"><a [routerLink]="['/about']">About</a></li>
</ul>
````

Navigate to some location (via method):
````
<button (click)="goToTwoPage()">Go to Two Page</button>
...
export class OneComponent {

  constructor(private router: Router) { }

  goToTwoPage(): void {
    this.router.navigate(['/two']);
  }
}
````
Navigate to some location (via link):
````
<a [routerLink]="['/one']">Go to home page</a>
````
Add param to url 

http://localhost:4200/posts?showIDs=true 

Add fragment to url (#)

http://localhost:4200/posts?showIDs=true#program-fragment
````
<button [routerLink]="['/posts']" [queryParams]="{showIDs: true}">Show IDs</button>
<button (click)="showIdProgrammatically()">Show IDs (programmatically</button>
...
export class PostsComponent implements OnInit {

  showIDs = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe((params: Params) => {
      this.showIDs = !!params.showIDs;
    });
    this.activateRoute.fragment.subscribe(fragment => console.log(fragment));
  }

    showIdProgrammatically(): void {
        this.router.navigate(['/posts'], {
          // http://localhost:4200/posts?showIDs=true
          queryParams: {showIDs: true},
          // http://localhost:4200/posts?showIDs=true#program-fragment
          fragment: 'program-fragment'
        });
    }
}
````
Get param from ulr:
````
export class PostComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {

      // http://localhost:4200/post/11 -> "11" is a param
      //  { path: 'posts/:id', component: PostComponent }
      console.log(params.id);
    });
  }
}
````
