export const metadata = {
  title: "F8 - Học lập trình để đi làm",
  description: "F8 học lập trình không khó",
  keywords: "học lập trình, f8, abc, xyz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
