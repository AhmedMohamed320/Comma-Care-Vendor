import MainNav from "@/components/mainNav/MainNav";
import "../globals.css";
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
                </div>
                <div>{children}</div>
                <div>
                  <Footer/>
                </div>
            </body>
        </html>
    );
}
