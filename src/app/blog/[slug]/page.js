import Image from "next/image";
import styles from "./singlePost.module.css";


const SinglePostPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="" alt="" fill className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>title</h1>
        <div className={styles.detail}>
          {/* <PostUser userId={post.userId} /> */}

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01/01/2021</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          harum repellat mollitia voluptates unde inventore temporibus. Vitae
          nihil obcaecati quo ea optio tempore? Assumenda obcaecati, laudantium
          eaque repellat ab iure.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
