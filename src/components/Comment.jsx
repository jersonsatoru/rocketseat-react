import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Comment({
  id,
  publishedAt,
  author,
  comment,
  applauses,
  onDeleteComment,
  onAddApplause,
}) {

  const handleDeleteComment = () => {
    onDeleteComment(id)
  }

  const handleAddApplause = () => {
    onAddApplause(id)
  }

  const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateFromNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <div className={styles.comment}>
      <Avatar
        src={author.avatar}
        hasBorder={false}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time title={publishedAtFormatted}>{publishedDateFromNow}</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comnetário">
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>
        <footer>
          <button onClick={handleAddApplause}>
            <ThumbsUp />
            Aplaudir
            <span>{applauses}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
