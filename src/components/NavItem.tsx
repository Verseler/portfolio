type NavItemProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavItem({ href, children }: NavItemProps) {
  return (
    <li>
      <a className="hover:border-b-2 hover:text-black border-neutral-600" href={href}>
        {children}
      </a>
    </li>
  );
}
