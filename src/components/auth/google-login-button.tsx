import { LogIn } from "lucide-react";

import { signInWithGoogle } from "@/app/login/actions";
import { Button } from "@/components/ui/button";

type GoogleLoginButtonProps = {
  nextPath?: string;
  configured: boolean;
};

export function GoogleLoginButton({
  nextPath = "/dashboard",
  configured,
}: GoogleLoginButtonProps) {
  return (
    <form action={signInWithGoogle}>
      <input type="hidden" name="next" value={nextPath} />
      <Button
        type="submit"
        size="lg"
        className="h-12 w-full gap-2"
        disabled={!configured}
        data-testid="google-login-button"
      >
        <LogIn className="size-4" aria-hidden="true" />
        Continuar con Google
      </Button>
    </form>
  );
}
