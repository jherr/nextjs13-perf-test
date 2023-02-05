import Content from "../src/Content";

export default async function Home() {
  const data = await import("../src/data");
  return (
    <main>
      <Content content={data.default} />
    </main>
  );
}
