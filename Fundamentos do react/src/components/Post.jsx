import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { LineSegment } from 'phosphor-react'

export function Post({ author, publishedAt, content }) {
    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
         
    }).format(publishedAt)
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

            <form className={styles.commentForm}>
                <strong> Deixe seu comentário </strong>

                <textarea placeholder='Deixe um comentário'></textarea>

                <footer>
                    <button type="submit"> Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}