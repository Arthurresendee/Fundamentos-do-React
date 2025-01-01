import styles from './Post.module.css'
import { Comment } from './Comment'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/95095230?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Diego Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='08 de Maio às 08:13h' dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p> Fala Galera!</p>

                <p>pipipipoe poirhgp e oricgnbluie rhgxcwqulrkg qcngrxhrg nr hxgwehxnwlug xl kurgh</p>

                <p> <a href="#">ghhjgj/sadhfldsjkhkjd</a> </p>
                <p> <a href="#">#novo projeto</a> <a href="#">#nlwRocketseat</a> </p>
            </div>

            <form className={styles.commentForm}>
                <strong> Deixe seu comentário </strong>

                <textarea placeholder='Deixe um comentário'></textarea>

                <footer>
                    <button type="submit"> Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}