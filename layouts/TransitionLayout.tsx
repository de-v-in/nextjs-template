'use client';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export const TransitionLayout: IComponent<{ id?: string }> = ({ id, children }) => {
  const pathname = usePathname();

  const simplePathname = id ?? pathname?.split('/')[2];

  return (
    <motion.div
      key={simplePathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full w-full z-0">
      {children}
    </motion.div>
  );
};
