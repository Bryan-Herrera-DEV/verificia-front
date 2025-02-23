import {
    InputOTPGroup,
    InputOTPSlot,
} from "@/shared/application/components/ui/input-otp"
import { cn } from "@/shared/application/lib/utils"

export const OTPSlots = ({ indices, error, isSuccess }: {
    indices: number[],
    error: string,
    isSuccess: boolean
}) => (
    <InputOTPGroup className="gap-2">
        {indices.map(index => (
            <InputOTPSlot
                key={index}
                index={index}
                className={cn(
                    "h-14 w-12 rounded-[18px] border-2 text-lg !bg-neutral-900",
                    error !== "" ? "border-red-500" :
                        isSuccess ? "border-green-500" :
                            "border-neutral-600"
                )}
            />
        ))}
    </InputOTPGroup>
);
