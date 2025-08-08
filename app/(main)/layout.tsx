import Navbar from "@/components/Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full w-full">
      <Navbar />
      <main className="h-full w-full">{children}</main>
    </div>
  );
}
