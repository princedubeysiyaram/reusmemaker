import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={
        {
          "--normal-bg": "#fff",
          "--normal-text": "#9f5bff",
          "--normal-border": "#9f5bff",
         
        }
      }
      {...props} />
  );
}

export { Toaster }

