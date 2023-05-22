import Image from "next/image";

export default function Custom404() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Image src="/empty.jpg" width={500} height={500}></Image>
    </>
  );
}
