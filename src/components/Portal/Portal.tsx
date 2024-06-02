import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

export default function Portal(props: PortalProps) {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div className=" block fixed  left-0 top-16 w-full h-full overflow-auto bg-opacity-20 z-50">
          {props.children}
        </div>,
        ref.current
      )
    : null;
}
