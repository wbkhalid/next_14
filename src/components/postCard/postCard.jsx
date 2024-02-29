import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>01/01/2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, harum repellat mollitia voluptates unde inventore temporibus. Vitae nihil obcaecati quo ea optio tempore? Assumenda obcaecati, laudantium eaque repellat ab iure.</p>
        <Link className={styles.link} href={`/blog/post`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
