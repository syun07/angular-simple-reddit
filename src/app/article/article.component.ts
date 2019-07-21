import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

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

  @Input() article: Article;

  constructor() { 
    // article is populated by the Input now, so we don't need anything here
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  // instead of storing title, link, and votes properties directly on the component, created a model for Article
  // creating  a reference to an article
  // need to update article.component.html to get template variables from right location, {{ article.title }} etc

  // created voteUp and voteDown functions in the model, which these functions point to

  ngOnInit() {
  }

}
