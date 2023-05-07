import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

export function Post({ author, content, publishedAt }) {

  const [comments, setComments] = useState([
    {
      id: 1,
      author: {
        avatar: 'https://github.com/jersonsatoru.png',
        name: 'Jerson Satoru Uyekita',
      },
      publishedAt: new Date('2022-01-01 12:00'),
      comment: "It's a really good content",
      applauses: 0,
    }
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    locale: ptBR,
  });

  const handleCreatNewContent = (event) => {
    event.preventDefault();
    setComments([...comments, {
      id: comments.length + 1,
      comment: newCommentText,
      author: {
        avatar: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes'
      },
      publishedAt: new Date('2023-01-01 15:00'),
      applauses: 0,
    }]);
    setNewCommentText('')
  }

  const handleNewCommentChange = (event) => {
    setNewCommentText(event.target.value)
  }

  const handleNewCommentInvalid = (event) => {

    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  const onDeleteComment = (id) => {
    setComments([...comments.filter(c => c.id !== id)])
  }

  const onAddApplause = (id) => {
    setComments([...comments.map(c => {
      if (c.id === id) {
        c.applauses += 1;
      }
      return c;
    })])
  }

  const isNewCommentEmpty = newCommentText === '';

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar} alt="" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted}>{publishedDateToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map((c, i) =>
          c.type == 'paragraph'
            ? (<p key={i}>{c.data}</p>)
            : (<a key={i}>{c.data}</a>))}
      </div>

      <form onSubmit={handleCreatNewContent} action="#" className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newCommentText}
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button disabled={isNewCommentEmpty} type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
          {comments.map(c => (
            <Comment
              key={c.id}
              id={c.id}
              author={c.author}
              applauses={c.applauses}
              comment={c.comment}
              publishedAt={c.publishedAt}
              onDeleteComment={onDeleteComment}
              onAddApplause={onAddApplause}
            />
          ))}
      </div>
    </article>
  )
}
