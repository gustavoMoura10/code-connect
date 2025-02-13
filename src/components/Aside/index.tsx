import Image from "next/image";
import styles from "./aside.module.css";
import Link from "next/link";

export default function Aside() {
  return (
    <aside className={styles.aside}>
      {/* <img src={"/logo.png"} alt="logo" /> */}
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="logo" width={120} height={45} />
      </Link>
    </aside>
  );
}
