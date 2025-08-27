// Layout mínimo para aislar errores y evitar reload global en about-us
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
