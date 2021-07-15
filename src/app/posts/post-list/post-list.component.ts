import { Component, Input } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  // posts = [
  //   {
  //     title: 'first post',
  //     content: 'this is the first post contect',
  //   },
  //   {
  //     title: 'second post',
  //     content: 'this is the second post contect',
  //   },
  //   {
  //     title: 'third post',
  //     content: 'this is the third post contect',
  //   },
  // ];

  @Input() posts: Post[] = [];
}
