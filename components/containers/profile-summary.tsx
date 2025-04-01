import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ProfileSocialNetwork from "./profile-social-network";
import { TypingTitle } from "./typed-titles";
import { profileRoles } from "@/constants/profile";
import ProfileActions from "./profile-actions";
import { User } from "lucide-react";

const ProfileSummary = async () => {
  return (
    <Card className="relative lg:min-w-92 z-20 !py-0 !m-0 lg:overflow-hidden ">
      <Image
        src={"/images/profile/bg-profile.webp"}
        className=" bg-contain hidden lg:block"
        fill
        alt={"profile"}
      />

      <Card className="mt-auto flex flex-col items-center z-10 max-h-1/2 h-full !lg:p-0 lg:ovalo ">
        {/* image profile */}
        <div className="profile-avatar lg:-mt-24 mt-4">
          <Avatar className="w-24 h-24 lg:w-32 lg:h-32 border-2 border-card scale">
            <AvatarImage src="/images/profile/avatar.webp" />
            <AvatarFallback className="bg-card">
              <User />
            </AvatarFallback>
          </Avatar>
        </div>

        {/* name section */}
        <h1 className="font-bold text-color text-xl lg:text-2xl leading-1 mt-5 lg:mt-10">
          Silvio Carrandi Noa
        </h1>
        <TypingTitle texts={profileRoles} className="mb-4" />
        <ProfileSocialNetwork />

        <ProfileActions />
      </Card>
    </Card>
  );
};

export default ProfileSummary;
