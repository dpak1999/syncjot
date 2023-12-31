"use client";
import { workspace } from "@/lib/supabase/supabase.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface SelectedWorkspaceProps {
  workspace: workspace;
  onClick?: (t: workspace) => void;
}

const SelectedWorkspace: FC<SelectedWorkspaceProps> = ({
  onClick,
  workspace,
}) => {
  const supabase = createClientComponentClient();
  const [workspaceLogo, setWorkspaceLogo] = useState("");

  useEffect(() => {
    if (workspace.logo) {
      const path = supabase.storage
        .from("workspace-logos")
        .getPublicUrl(workspace.logo).data.publicUrl;
      setWorkspaceLogo(path);
    }
  }, [workspace]);

  return (
    <Link
      href={`/dashboard/${workspace.id}`}
      onClick={() => {
        if (onClick) {
          onClick(workspace);
        }
      }}
      className="flex rounded-md hover:bg-muted transition-all flex-row p-2 gap-4 justify-center cursor-pointer items-center my-2"
    >
      {workspaceLogo && (
        <Image
          width={26}
          height={26}
          objectFit="cover"
          src={workspaceLogo}
          alt={workspace.title}
        />
      )}

      <div className="flex flex-col">
        <p className="text-lg overflow-hidden overflow-ellipsis whitespace-nowrap w-[170px]">
          {workspace.title}
        </p>
      </div>
    </Link>
  );
};

export default SelectedWorkspace;
