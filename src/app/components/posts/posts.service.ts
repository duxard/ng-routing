import { Injectable } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id: number;
}

@Injectable()
export class PostsService {

  private posts: Post[] = [
    { title: 'post 1', text: 'post 1', id: 11 },
    { title: 'post 2', text: 'post 2', id: 22 },
    { title: 'post 3', text: 'post 3', id: 33 }
  ];

  getPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: number): Post  {
    return this.posts.find(post => (post.id === id));
  }
}
