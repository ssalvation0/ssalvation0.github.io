type Props = {
  index: string; // e.g. "01"
  title: string;
  kicker?: string;
};

export default function SectionHeading({ index, title, kicker }: Props) {
  return (
    <div className="mb-12 flex items-baseline gap-4 sm:gap-6">
      <span
        aria-hidden
        className="font-display text-5xl font-bold leading-none text-accent/30 sm:text-7xl dark:text-accent/45"
      >
        {index}
      </span>
      <div>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {kicker && (
          <p className="mt-3 max-w-2xl text-balance text-muted">{kicker}</p>
        )}
      </div>
    </div>
  );
}
