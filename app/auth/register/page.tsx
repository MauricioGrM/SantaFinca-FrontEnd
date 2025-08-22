"use client";
import { Typography } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { checkIfEmailIsValid } from "./emailValidation";
import { useCallback, useState } from "react";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z
    .email({ message: "Please enter a valid email address." })
    .refine(async (e) => {
      return await checkIfEmailIsValid(e);
    }, "This email is in our database"),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function Register() {
  const [isSendingForm, setIsSendingForm] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = useCallback(
    async (data: z.infer<typeof FormSchema>) => {
      setIsSendingForm(true);
      const test = await checkIfEmailIsValid(data.email);

      if (test) {
        toast.success("Email is valid, you can proceed with registration.");
        setIsSendingForm(false);
      }
    },
    [setIsSendingForm]
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center w-full gap-4 animate__animated animate__fadeIn"
      >
        <ToastContainer />
        <Typography variant="h2">¡Vamos a mejorar juntos!</Typography>
        <div className="w-full gap-2 flex flex-row">
          <FormField
            disabled={isSendingForm}
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            disabled={isSendingForm}
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full gap-2 flex flex-col">
          <FormField
            disabled={isSendingForm}
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo Eléctronico</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full gap-2 flex flex-col">
          <FormField
            disabled={isSendingForm}
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button disabled={isSendingForm} type="submit" className="w-1/2">
          Registrate
        </Button>
      </form>
    </Form>
  );
}
