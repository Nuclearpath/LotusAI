import Image from "next/image";
export default function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="h-[300px] w-[300px]">
          <Image
            src="/lotusai-loader.gif"
            fill
            className="!relative object-cover"
          ></Image>
        </div>
      </div>
      {/* <Image src="/lotus_anim.webm" fill></Image> */}
    </div>
  );
}
