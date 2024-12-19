import Image from "next/image";
import styles from './avatar.module.css'
export default function Avatar({
  name,
  imageSrc,
}: {
  name: string;
  imageSrc: string;
}) {
  return (
    <ul className={styles.avatar}>
      <li>
        <Image src={imageSrc} alt={name} width={32} height={32} />
      </li>
      <li>@{name}</li>
    </ul>
  );
}
