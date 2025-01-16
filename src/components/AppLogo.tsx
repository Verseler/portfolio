import MyLogo from "@/assets/my-logo.png";

type AppLogoProps = {
  size?: "sm" | "lg";
};

export default function AppLogo({ size = "sm" }: AppLogoProps) {
  const sizeStyle = size === "sm" ? "size-7" : "size-10";

  return (
    <div className="flex items-center gap-x-2">
      <img className={sizeStyle} src={MyLogo} />
      Verseler
    </div>
  );
}
