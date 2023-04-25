import { getPostData } from "@/service/posts";

type Props = {
    params:{
        slug:string;
    }
}

export default  async function PostPage({params:{slug}}:Props){
    
    const post = await getPostData(slug);

    return(
        <section className="w-full h-full">
            <h1>{post.title}</h1>
            <pre className="w-full h-full">{post.content}</pre>
        </section>
    )
}