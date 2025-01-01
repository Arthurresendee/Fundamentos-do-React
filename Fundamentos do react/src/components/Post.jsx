import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { LineSegment } from 'phosphor-react'
import { useState } from 'react'

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        'Post muito Bacana hein'
    ])

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
         
    }).format(publishedAt)

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments,newCommentText])
        setNewCommentText('');
    }

    function handleCreateNewCommentChange(){
        setNewCommentText(event.target.value);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        hasBorder={true}
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedDateFormatted}>
                    {publishedDateFormatted}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p>{line.content}</p>
                    } else if (line.type ==='link'){
                        return <p><a href="">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong> Deixe seu comentário </strong>

                <textarea 
                    name="commentTextArea" 
                    placeholder='Deixe um comentário'
                    onChange={handleCreateNewCommentChange}
                    value={newCommentText}
                />

                <footer>
                    <button type="submit"> Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment =>{
                        return <Comment content={comment}/>
                    })
                }
            </div>
        </article>
    )
}