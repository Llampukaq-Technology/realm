import { useCollection } from "@/realm";
import useSync from "@/realm/hooks/useSync";
import { Button, H1 } from "cllk";
export default function Home() {
  const collection = useCollection("r", "");
  const { data } = useSync<{ holi: string }>(
    collection,
    ["update"],
    (set, document) => {
      document.holi == "user" && set(document);
    }
  );
  console.log(data);
  return (
    <>
      <H1>si</H1>
      <Button>sii</Button>
    </>
  );
}
