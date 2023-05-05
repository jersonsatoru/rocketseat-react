import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        src="https://github.com/jersonsatoru.png"
        hasBorder={false}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jerson Satoru Uyekita</strong>
              <time title="20/01/2023">Cerca de 2h atrás</time>
            </div>
            <button title="Deletar comnetário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
