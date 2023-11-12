export default function SocialMedia() {
  return (
    <ul className="flex items-center w-full h-6 gap-3 sm:w-64 sm:h-8 justify-evenly">
      <li className="h-full cursor-pointer">
        <img
          className="h-full w-max"
          width="24"
          height="24"
          src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png"
          alt="external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo"
        />
      </li>
      <li className="h-full cursor-pointer">
        <img
          className="h-full w-max"
          width="50"
          height="50"
          src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook.png"
          alt="facebook-new"
        />
      </li>
      <li className="h-full cursor-pointer">
        <img
          className="h-full w-max"
          src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new--v1.png"
          alt="instagram-new--v1"
        />
      </li>
      <li className="h-full cursor-pointer">
        <img
          className="h-full w-max"
          src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"
          alt="linkedin"
        />
      </li>
    </ul>
  );
}
