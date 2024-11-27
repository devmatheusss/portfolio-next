import { GithubIcon, GitlabIcon, LinkedinIcon, MessagesSquareIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="h-[512px] w-10 flex flex-col items-center gap-4">
      <div className="relative size-10 rounded-xl shadow-xl">
        <Image
          src={"https://avatars.githubusercontent.com/u/114790698?v=4"}
          alt="Matheus's Avatar"
          width={128}
          height={128}
          className="object-cover w-full rounded-xl"
        />
        <div className="size-2 bg-green-500 rounded-full absolute -right-0.5 -bottom-0.5" />
      </div>
      <ul className="flex flex-col gap-2 bg-neutral-800/80 w-full p-1 rounded-xl">
        <li>
          <Link className="rounded-lg transition aspect-square w-full flex items-center justify-center hover:bg-white/20" href="https://github.com/devmatheusss" target="_blank" rel="noreferrer">
            <GithubIcon size={20} />
          </Link>
        </li>
        <li>
          <Link className="rounded-lg transition aspect-square w-full flex items-center justify-center hover:bg-white/20" href="https://github.com/devmatheusss" target="_blank" rel="noreferrer">
            <LinkedinIcon size={20} />
          </Link>
        </li>
        <li>
          <Link className="rounded-lg transition aspect-square w-full flex items-center justify-center hover:bg-white/20" href="https://github.com/devmatheusss" target="_blank" rel="noreferrer">
            <GitlabIcon size={20} />
          </Link>
        </li>
      </ul>
      <div className="w-full p-1 rounded-xl bg-neutral-800/80">
        <Link href="mailto:contact@theavelino.dev" className="rounded-lg transition aspect-square w-full flex items-center justify-center hover:bg-white/20">
          <MessagesSquareIcon size={20} />
        </Link>
      </div>
    </aside>
  )
}