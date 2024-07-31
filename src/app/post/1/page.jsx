"use client";
import { usePathname } from "next/navigation";
export default function Post() {
const pathname = usePathname();
return <p> {pathname} </p> // pathname is a variable that links directories to the current one and usePathname is the function used to do same //
;
}