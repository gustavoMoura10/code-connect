import Image from "next/image";
import styles from "./aside.module.css";

export default function Aside() {
  return (
    <aside className={styles.aside}>
      {/* <img src={"/logo.png"} alt="logo" /> */}
      <Image src={"/logo.png"} alt="logo" width={120} height={45} />
    </aside>
  );
}
