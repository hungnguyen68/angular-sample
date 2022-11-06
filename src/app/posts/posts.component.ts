import { Component, OnInit, ViewChild } from '@angular/core';
import { IPost, PostService } from './posts.service';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  private posts: IPost[];

  rows = [];
  temp = [];
  ColumnMode = ColumnMode;
  searchValue: string = '';
  deletedRowIds = [];

  @ViewChild('firstTable', { static: false }) postsTable: DatatableComponent;
  @ViewChild('searchInput', { static: false }) searchInput;

  constructor(private postService: PostService, private router:Router) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.rows = posts;
      this.temp = posts;
      this.deletedRowIds = [];
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    var that = this;
    // filter our data by title or body
    const temp = this.temp.filter(function (d) {
      return (d.title.toLowerCase().indexOf(val) !== -1 || d.body.toLowerCase().indexOf(val) !== -1 || !val)
        && that.deletedRowIds.indexOf(d.id) === -1;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.postsTable.offset = 0;
  }

  clearSearch() {
    // clearing the value
    this.searchInput.nativeElement.value = ' ';
    this.rows = [...this.rows]
  }

  deletePosts(postId) {
    var result = confirm("Are you sure to delete the post with id: " + postId);
    if (result) {
      let tempRows = [...this.rows];
      tempRows = tempRows.filter(function (postRow) {
        return postRow.id !== postId;
      })
      this.rows = tempRows;
      this.deletedRowIds.push(postId); //store ids which deleted; later when these ids will not shown in searching result
    }
  }

  viewPostDetail(postId){
    this.router.navigate(['/posts/'+ postId]);
  }

  truncate(input) {
    //limit the content of the body
    if (input.length > 100) {
      return input.substring(0, 100) + '...';
    }
    return input;
  };

}