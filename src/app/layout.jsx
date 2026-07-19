import "./globals.css";
import "./responsive-fixes.css";

export const metadata = {
  title: "ETC HealthTech | Healthcare Operational Workflow Software",
  description:
    "Practical healthcare operational software for waste audit compliance, evidence-based reporting, porter tracking and offline continuity.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
