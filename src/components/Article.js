import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"

export default function Article({ article }) {
  function deleteArticle(){
    article = null;
  }
  return (
    <article>
      {!article ? (
        <p id = "welcome">Welcome to My Anime Blog! Where I write personal reviews of the animes I have watched!</p>
      ) : (
        <section id = "textOutput">
          <h2>{article.title}</h2>
          <p className="date">{`Posted: ${new Date}`}</p>
          <p className="body">{article.body}</p>
          <button onClick = "deleteArticle()">Remove Anime from list</button>
        </section>
        
      )}
    </article>
  );
}

