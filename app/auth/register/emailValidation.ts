"use server";
import api from "@/lib/axios";

export const checkIfEmailIsValid = async (email: string) => {
  try {
    const response = await api.post("/auth/email-validation", { email });
    return response.data.message === "Email is available"; // Assuming the API returns an object with isValid property
  } catch (error) {
    console.error("Error checking email validity:", error);
    return false; // Return false if there's an error
  }
};
