import "@fortawesome/fontawesome-free/css/all.min.css";
import "./global.css";

export const metadata = {
  title: "F8 - Học lập trình để đi làm", //title
  description: "F8 chuyên đào tạo lập trình để đi làm", //meta description
  robots: "nofollow, noindex",
  openGraph: {
    title: "F8 - Học lập trình để đi làm 1",
    description: "F8 chuyên đào tạo lập trình để đi làm 1",
    images: [
      "https://fullstack.edu.vn/images/image01.jpg",
      "https://fullstack.edu.vn/images/image02.jpg",
    ],
    url: "https://fullstack.edu.vn",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
