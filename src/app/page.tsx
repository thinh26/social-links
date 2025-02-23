import Avatar from "@/component/Avatar";
import BlankDiv from "@/component/BlankDiv";
import SocialLink from "@/component/SocialLink";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Home() {
  const links: Array<
    Partial<{ icon: React.ReactNode; name: string; url: string }>
  > = [
    {
      icon: <FaFacebook size={30} />,
      name: "Facebook",
      url: "https://facebook.com/Th1nh26",
    },
    {
      icon: <FaInstagram size={30} />,
      name: "Instagram",
      url: "https://instagram.com/thinh26"
    },
    {
      icon: <FaTwitter size={30} />,
      name: "X",
      url: "https://x.com/thinh26"
    }
  ];

  return (
    <div className="flex flex-row h-dvh max-md:p-3">
      <BlankDiv />
      <div className="w-full">
        <div className="flex flex-col justify-center items-center gap-4 h-full">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-center">
              <Avatar
                className="rounded-full"
                src="/assets/png/500x500bb.png"
                alt="myAvatar"
                width={80}
                height={80}
              />
            </div>
            <div className="font-bold text-center text-xl">
              Nguyễn Đức Thịnh
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            {links.map(({ icon, name, url }) => (
              <SocialLink key={name} icon={icon} name={name} url={url} />
            ))}
          </div>
        </div>
      </div>
      <BlankDiv />
    </div>
  );
}
