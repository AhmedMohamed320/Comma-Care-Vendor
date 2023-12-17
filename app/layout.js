import MainNav from "@/components/mainNav/MainNav";
import "./globals.css";
import NavCategory from "@/components/navCategory/NavCategory";
import Footer from "@/components/footer/Footer";

export const metadata = {
    title: "Comma Care Vendor",
    description: "Comma Care Vendor",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div>
                    <MainNav />
                    <NavCategory />
                </div>
                <div>{children}</div>
                <div>
                  <Footer/>
                </div>
            </body>
        </html>
    );
}
