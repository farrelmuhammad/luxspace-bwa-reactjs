import useModalDOM from "../helpers/hooks/useModalDOM";
import useScrollAnchor from "../helpers/hooks/useScrollAnchor";
import useScrollTop from "../helpers/hooks/useScrollTop";

export default function Document({ children }) {
  useModalDOM();
  useScrollAnchor();
  useScrollTop();
  return children;
}
