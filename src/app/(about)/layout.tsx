// layout mínimo para aislar errores y evitar reload global
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
