import AuthProvider from "@/components/AuthProvider";

export default function TaskPageLayout({ children }) {
  return (
    <main>
      <AuthProvider>{children}</AuthProvider>
    </main>
  );
}
