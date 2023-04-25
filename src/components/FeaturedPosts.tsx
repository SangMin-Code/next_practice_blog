import {  getFeaturedPosts } from "@/service/posts"
import { ReactNode } from "react";
import { PostCard } from "./PostCard";
import PostsGrid from "./PostsGrid";
export default async function FeaturedPosts():Promise<ReactNode>{
    
    const posts = await getFeaturedPosts();

    return(
        <section className="my-4">
            <h1>Featured Posts</h1>
            <PostsGrid posts = {posts}/>
        </section>
    )
}



