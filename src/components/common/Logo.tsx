import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.svg" alt="Acorn Ledger" width={42} height={42} className="w-10 h-10"/>
      <span className="text-2xl lg:text-3xl sm:text-sm style-script-regular text-purple-600 pt-1 text-gradient">
        Acorn Ledger
      </span>
    </Link>
  );
}
