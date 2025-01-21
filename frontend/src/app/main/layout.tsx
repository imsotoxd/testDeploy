import Navbar from "@/components/mainLayout/Navbar";
import Footer from "@/components/mainLayout/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex scroll-smooth flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col   min-h-0 mt-[100px]">
        {" "}
        {children}
      </main>
      <Footer />
    </div>
  );
}
