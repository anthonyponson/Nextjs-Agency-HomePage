import "./globals.css";

export const metadata = {
  title: "Morrow — Independent Design Studio",
  description:
    "Morrow is an independent design studio creating bold brands, digital products and websites that move businesses forward.",
  keywords: [
    "design agency",
    "branding",
    "web development",
    "UI UX design",
  ],
  openGraph: {
    title: "Morrow — Independent Design Studio",
    description: "Strategy, design and technology for brands with somewhere to go.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3f0e8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
