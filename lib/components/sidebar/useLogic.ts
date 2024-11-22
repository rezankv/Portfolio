import { useState } from 'react';

const useLogic = () => {
  const [isOpen, setIsOpen] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                                  Handlers                                 */
  /* -------------------------------------------------------------------------- */

  const toggleSidebarHandler = () => setIsOpen((prev) => !prev);

  return { toggleSidebarHandler, isOpen };
};

export default useLogic;
