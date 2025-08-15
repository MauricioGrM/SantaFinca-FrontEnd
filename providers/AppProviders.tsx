import ThemeProviderWrapper from "@/providers/ThemeProviderWrapper";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProviderWrapper>{children}</ThemeProviderWrapper>;
};
