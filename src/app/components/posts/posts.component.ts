import { Component, OnInit } from '@angular/core';
import { Post, PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
  }

  get posts(): Post[] {
    return this.postService.getPosts();
  }

}
