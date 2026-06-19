import { FaGithub, FaTelegram, FaEnvelope } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { socials } from "../data/profile";
import type { Social } from "../data/profile";

const ICONS: Record<Social["icon"], IconType> = {
  github: FaGithub,
  telegram: FaTelegram,
  email: FaEnvelope,
};

export default function SocialLinks({ size = 18 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      {socials.map((s) => {
        const Icon = ICONS[s.icon];
        const external = s.icon !== "email";
        return (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            title={s.handle}
            {...(external
              ? { target: "_blank", rel: "noreferrer noopener" }
              : {})}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}
