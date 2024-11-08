import { useRef, useEffect, useState, ReactNode, ReactPortal } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

function Portal(props: PortalProps): ReactPortal | null {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? (createPortal(
        <div className="block fixed left-0 top-[70px] overflow-auto bg-opacity-20 z-50">
          {props.children}
        </div>,
        ref.current
      ) as React.ReactPortal)
    : null;
}

export default Portal;
