import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f8fa]">
      <Navbar />
      <main className="flex-1 mx-auto max-w-7xl w-full px-4 py-6 sm:px-6 sm:py-8">{children}</main>
      <Footer />
    </div>
  );
}
