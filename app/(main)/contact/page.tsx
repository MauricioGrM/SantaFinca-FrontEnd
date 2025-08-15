import { Alert, AlertTitle } from "@/components/ui/alert";
import { PopcornIcon } from "lucide-react";

export default function Contact() {
  return (
    <section className="container mx-auto p-6">
      <Alert>
        <PopcornIcon />
        <AlertTitle>Contact Us</AlertTitle>
      </Alert>
      <p className="mt-4">
        If you have any questions or feedback, feel free to reach out to us!
      </p>
    </section>
  );
}
