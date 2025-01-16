import Navbar from "@/components/mainLayout/Navbar";
import Footer from "@/components/mainLayout/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col min-h-0">{children}</main>
      <Footer />
    </div>
  );
}
