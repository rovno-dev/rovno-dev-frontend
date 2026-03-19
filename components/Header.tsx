import { Container } from "@/components/core/layout/Container";
import RovnoLogotype from "./core/data-display/RovnoLogotype";
import { colorStyles } from "@/utils/styles/colors";
import Link from "next/link";
import { useCurrentBreakpoint } from "@/utils/hooks/useCurrentBreakpoint";

export default function Header() {
  const currentSize = useCurrentBreakpoint();

  return (
    <div
      style={{
        justifyContent: 'center',
        width: '100%',
        border: `1px solid ${colorStyles.dark.background.border.default}`,
        backgroundColor: colorStyles.dark.background.card.default,
      }}
      className="py-[1.1rem] md:py-[1.25rem]"
    >
      <Container
        variant="full-width"
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link href={'/'}>
          <RovnoLogotype className="h-[2rem] md:h-[2.2rem]" />
        </Link>
      </Container>
    </div >
  );
}
