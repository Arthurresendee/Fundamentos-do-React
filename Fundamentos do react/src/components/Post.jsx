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
      event.target.setCustomValidity('')
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
      event.target.setCustomValidity('Esse campo obrigatório')
    }

    function deleteComment(commentToDelete) {
      const commentsWithouDeletedOne = comments.filter(comment => {
         return comment !== commentToDelete
      })
      
      setComments(commentsWithouDeletedOne);
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
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type ==='link'){
                        return <p key={line.content + 'a'}><a href="">{line.content}</a></p>
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
                    onInvalid={handleNewCommentInvalid}
                    required={true}
                />

                <footer>
                    <button type="submit" disabled={newCommentText.length ===0}> Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment =>{
                        return (
                           <Comment 
                              key={comment + 34} 
                              content={comment} 
                              onDeleteComment={deleteComment}
                           />
                        )
                    })
                }
            </div>
        </article>
    )
}