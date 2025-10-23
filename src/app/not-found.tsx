"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    return <h1>404 - Page Not Found at {pathname}</h1>;
}