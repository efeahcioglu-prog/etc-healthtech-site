import "./globals.css";

export const metadata = {
  title: "ETC HealthTech | Healthcare Operational Workflow Software",
  description:
    "Practical healthcare operational software for waste audit compliance, evidence-based reporting, porter tracking and offline continuity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
