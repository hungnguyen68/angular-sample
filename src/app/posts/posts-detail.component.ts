import {Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import {IPost, PostService} from './posts.service';


@Component({
    selector: 'app-posts-detail',
    templateUrl:'./posts-detail.component.html',
    styleUrls: ['./posts-detail.component.css']
})

export class PostsDetailComponent implements OnInit{

    post : IPost | undefined;

    constructor(private route: ActivatedRoute, private postService: PostService, private location: Location) {
    }
    
    ngOnInit(): void {
        const routeParams = this.route.snapshot.paramMap;
        const postIdFromRoute = Number(routeParams.get('postId'));
        this.postService.getPost(postIdFromRoute).subscribe((post) => this.post = post);
    };

    back(): void{
        this.location.back();
    }

}
