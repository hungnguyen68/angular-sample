import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
 
export interface IPost { 
    userId:number ;
    id: number;
    title: string ;
    body:number;
 
}
 
export class PostService{
 
    private postsUrl = 'https://jsonplaceholder.typicode.com/posts/';
    
    public constructor(private http: HttpClient) {
        
    }
 
    public getPosts(): Observable<IPost[]> {
        return this.http.get<IPost[]>(this.postsUrl);
    }
 
    public getPost(id): Observable<IPost> {
        return this.http.get<IPost>(this.postsUrl + id);
    }

}