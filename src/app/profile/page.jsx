import dynamic from "next/dynamic";

const ProfileSettings = dynamic(() => import("./index"));

export const metadata = {
  title: "Profile Settings | DailyDilli",
  description: "Manage your personal information on DailyDilli",
};

export default function Page() {
  return <ProfileSettings />;
}
