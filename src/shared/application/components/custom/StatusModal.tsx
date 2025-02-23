import { Check, X } from "lucide-react"
import { Button } from "@/shared/application/components/ui/button"

interface ModalProps {
  onContinue: () => void;
  title: string;
  message: string;
  buttonText: string;
  type: "success" | "error";
}

export const StatusModal = ({
  onContinue,
  title,
  message,
  buttonText,
  type
}: ModalProps) => {
  const Icon = type === "success" ? Check : X;

  return (
    <div className="w-full max-w-[400px] p-6 flex flex-col items-center gap-6">
      <div className={`rounded-full border-2 border-white p-4`}>
        <Icon className="h-12 w-12" />
      </div>

      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-muted-foreground">
          {message}
        </p>
      </div>

      <Button
        className="w-full bg-black-Night hover:bg-black-Onyx hover:text-white"
        type="submit"
        variant="outline"
        onClick={onContinue}
      >
        {buttonText}
      </Button>
    </div>
  )
}