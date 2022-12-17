import { forwardRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { classNames } from "@/utils";
import {useIsInsideMobileNavigation, useMobileNavigationStore} from "@/components";

interface Props {
  className?: string;
}
// export Header component forwardRef
export const Header = forwardRef<HTMLDivElement,Props>(function Header({ className }, ref) {

  let { isOpen: mobileNavIsOpen } = useMobileNavigationStore()
  let isInsideMobileNavigation = useIsInsideMobileNavigation()


  let { scrollY } = useScroll()
  let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9])
  let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8])

  return (
    <motion.div
      ref={ref}
      className={classNames(
        className,
        'fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-12 px-4 transition sm:px-6 lg:z-30 lg:px-8'
      )}>
      mucho texto
    </motion.div>
  )
})


