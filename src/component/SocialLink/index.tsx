type SocialLinkProps = Readonly<
  Partial<{
    icon: React.ReactNode;
    name: string;
    url: string;
  }>
>;

function SocialLink({ icon, name, url }: SocialLinkProps) {
  return (
    <a
      href={url}
      className="w-full p-3 rounded-2xl border-2 flex flex-row items-center justify-center cursor-pointer hover:bg-gray-100 hover:scale-105 hover:transition-all hover:duration-300 dark:border-white dark:bg-gray-100 transform-gpu"
      target="_blank"
      data-testid = "socialLink"
    >
      <div className="flex-1/3">{icon}</div>
      <div className="flex-1/3 text-center">
        <span className="font-semibold">{name}</span>
      </div>
      <div className="flex-1/3"></div>
    </a>
  );
}

export default SocialLink;
