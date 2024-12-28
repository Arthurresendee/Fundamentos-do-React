export function Post(post){
    return(
        <div>
            <strong>{post.author}</strong>
            <p>{post.content}</p>
        </div>
    )
}