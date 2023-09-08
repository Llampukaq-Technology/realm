import { useAuth } from "@/realm";

export default function Home() {
  const { logout } = useAuth();

  return (
    <>
      <button onClick={logout}>sii</button>
    </>
  );
}
