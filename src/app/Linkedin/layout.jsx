import { NavbarDemo } from "@/components/NavbarDemo";

export default function Layout({ children, profile, ai_profile }) {
    return (
        <>
    <div className="hidden sm:block">
      <NavbarDemo/>
      </div>
      <div className="flex">
        {children}
        {profile}
        {ai_profile}
      </div>
      </>
    )
  }