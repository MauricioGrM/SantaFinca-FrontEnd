import { Typography } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <Typography variant="h2">¡Vamos a mejorar juntos!</Typography>

      <div className="w-full gap-2 flex flex-row">
        <div className="w-full gap-2 flex flex-col">
          <Label htmlFor="name" className="font-bold">
            Nombre
          </Label>
          <Input type="text" id="name" />
        </div>
        <div className="w-full gap-2 flex flex-col">
          <Label htmlFor="lastname" className="font-bold">
            Apellido
          </Label>
          <Input type="text" id="lastname" />
        </div>
      </div>

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
      <Button className="w-1/2">Registrate</Button>

      <Typography variant="p" className="text-gray-500">
        ¿Ya tienes una cuenta?{" "}
        <a href="/auth/login" className="text-blue-500 hover:underline">
          Inicia Sesión
        </a>
      </Typography>
    </div>
  );
}
