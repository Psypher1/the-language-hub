import fs from "fs";
import path from "path";

export async function getStaticPaths() {
  const langDir = path.join("lang");

  const files = fs.readdirSync(langDir);
}
export async function getStaticProps() {}
export default function LangPath() {
  return <h1>Language Path</h1>;
}
