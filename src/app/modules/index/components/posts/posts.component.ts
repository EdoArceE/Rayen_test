import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
interface iPost {
  caption: string, url: string
}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  posts: iPost[] = []
  constructor(private http: HttpService) {

  }

  async ngOnInit(): Promise<void> {
    this.posts = await this.http.ListadoPost as iPost[]
  }

}
