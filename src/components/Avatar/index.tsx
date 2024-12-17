import Image from "next/image";

export default function Avatar({
  name,
  imageSrc,
}: {
  name: string;
  imageSrc: string;
}) {
  return (
    <ul>
      <li>
        <Image src={imageSrc} alt={name} width={32} height={32} />
      </li>
      <li>@{name}</li>
    </ul>
  );
}
