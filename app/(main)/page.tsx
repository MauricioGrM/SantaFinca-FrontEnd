import { Typography } from "@/components/Typography";

export default function Home() {
  return (
    <div>
      <div className="container bg-primary max-w-full flex items-center justify-center h-64 flex-col">
        <Typography variant="h1">Sistema de Gestión de Fincas</Typography>
        <Typography variant="p">
          Santa Finca te ayuda a gestionar tu finca
        </Typography>
      </div>
    </div>
  );
}
