import { Component, OnInit } from '@angular/core';
import { Post, PostsService } from './posts.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {

  showIDs = false;

  constructor(
    private postService: PostsService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe((params: Params) => {
      this.showIDs = !!params.showIDs;
    });
    this.activateRoute.fragment.subscribe(fragment => console.log(fragment));
  }

  get posts(): Post[] {
    return this.postService.getPosts();
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
