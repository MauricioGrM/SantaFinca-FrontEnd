import { Typography } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <Typography variant="h2">¡Qué bueno verte de nuevo!</Typography>

      <div className="w-full gap-2 flex flex-col">
        <Label htmlFor="email" className="font-bold">
          Email
        </Label>
        <Input type="email" id="email" />
      </div>
      <div className="w-full gap-2 flex flex-col">
        <Label htmlFor="password" className="font-bold">
          Contraseña
        </Label>
        <Input type="password" id="password" />
      </div>
      <Button className="w-1/2">Iniciar Sesión</Button>
      <div className="flex flex-col items-center">
        <Typography variant="p" className="text-gray-500">
          ¿No tienes una cuenta?{" "}
          <a href="/auth/register" className="text-blue-500 hover:underline">
            Regístrate
          </a>
        </Typography>

        <Typography variant="p" className="text-gray-500">
          ¿Olvidaste tu contraseña?{" "}
          <a
            href="/auth/reset-password"
            className="text-blue-500 hover:underline"
          >
            Restablecer
          </a>
        </Typography>
      </div>
    </div>
  );
}
