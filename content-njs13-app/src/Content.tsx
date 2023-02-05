export default function Content({ content }: { content: string[] }) {
  return (
    <div className="content">
      {content.map((c, i) => (
        <p key={i}>{c}</p>
      ))}
    </div>
  );
}
