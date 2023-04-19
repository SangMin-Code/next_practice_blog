import {  getFeaturedPosts } from "@/service/posts"
import { ReactNode } from "react";
import { PostCard } from "./PostCard";
export default async function FeaturedPosts():Promise<ReactNode>{
    
    const posts = await getFeaturedPosts();

    return(
        <section>
            <h1>Featured Posts</h1>
            <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    posts.map((post)=><PostCard key={post.path} post={post}/>)
                }
            </ul>
        </section>
    )
}



