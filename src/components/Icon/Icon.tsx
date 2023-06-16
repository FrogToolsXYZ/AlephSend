import { findIconDefinition, IconLookup } from "@fortawesome/fontawesome-svg-core";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

library.add(fas, fab);

export function Icon({ icon, ...props }: Omit<FontAwesomeIconProps, "icon"> & { icon: IconLookup }) {
  return <FontAwesomeIcon icon={findIconDefinition(icon)} {...props} />;
}
