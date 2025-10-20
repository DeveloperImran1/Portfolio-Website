import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/" className="relative">
        <Image
          height={600}
          width={600}
          className="h-[22px] w-[17px] animate-spin absolute top-[12px] left-[25px] mx-auto"
          src="https://tech-apps-f8d51.web.app/assets/logo-BKgrWx8u.png"
          alt=""
        />
        <Image
          height={600}
          width={600}
          className="h-[60px] w-[60px] mt-4"
          src="https://i.postimg.cc/sXPt2qT3/Imran-Portfolio-Logo.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Logo;
