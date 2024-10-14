import HomeBtn from "@/app/components/HomeBtn";

export default function SubpagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-20 px-32">
        <HomeBtn />
        {children}
    </main>
  );
}
