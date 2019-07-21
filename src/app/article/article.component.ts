import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass='row';
  // we're using Semantic UI, which provides a CSS class for rows called 'row'
  // @HostBinding is imported from the package @angular/core, encapsulates the app-article markup within our component
  // allows us to configure our host element from within the component

  votes: number;
  title: string;
  link: string;

  constructor() { 
    this.title = "Angular 2";
    this.link = "http://angular.io";
    this.votes = 10;
    // set default attributes
  }

  voteUp() {
    this.votes += 1;
    return false;
  }

  voteDown() {
    this.votes -= 1;
    return false
  }

  ngOnInit() {
  }

}
