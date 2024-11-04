import {
    AnimatePresence,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
  } from "framer-motion";
  import { useEffect, useRef, useState } from "react";
  
  /**
     * You may want to hide the scrollbar on the body element
     * of your page while using this navigation.
     * 
     * You can accomplish this using the following css:
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
      
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none; 
        }
      */

  
  // Total number of lines on the side of the page
  const NUM_LINES = 100;
  // Position key will place the title on the Nth
  // line of the sidebar
  const navItems = [
    { position: 10, title: "O Raporcie", id: "o-raporcie" },
    { position: 17, title: "Dobre Praktyki", id: "dobre-praktyki" },
    { position: 24, title: "Badanie DeLab UW", id: "badanie-delab" },
    { position: 31, title: "Generatywna AI", id: "generatywna-ai" },
    { position: 38, title: "Narzędzie GenAI", id: "narzedzie-genai" },
    { position: 45, title: "Wytyczne UW", id: "wytyczne-uw" },
  ];
  
  const SideBarNav = () => {
    const [isHovered, setIsHovered] = useState(false);
    const mouseY = useMotionValue(Infinity);
  
    return (
      <motion.nav
        onMouseMove={(e) => {
          mouseY.set(e.clientY);
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          mouseY.set(Infinity);
          setIsHovered(false);
        }}
        className="fixed right-0 top-0 flex h-screen flex-col items-end justify-between py-4 pl-4"
        style={{
          zIndex: 100, // Вищий z-index для навігаційної панелі
          backgroundColor:  "#e2e2e2eb"
         
        }}
      >
        {Array.from(Array(NUM_LINES).keys()).map((i) => {
          const linkContent = navItems.find((item) => item.position === i + 1);
  
          return (
            <LinkLine
              title={linkContent?.title}
              isHovered={isHovered}
              mouseY={mouseY}
              key={i}
              id={linkContent?.id}
            />
          );
        })}
      </motion.nav>
    );
  };
  
  
  const SPRING_OPTIONS = {
    mass: 1,
    stiffness: 120,
    damping: 20,
  };
  
  const LinkLine = ({ mouseY, isHovered, title, id }) => {
    const ref = useRef(null);
    const distance = useTransform(mouseY, (val) => {
      const bounds = ref.current?.getBoundingClientRect();
      return val - (bounds?.y || 0) - (bounds?.height || 0) / 2;
    });
  
    const lineWidthRaw = useTransform(distance, [-80, 0, 80], [20, 100, 20]);
    const lineWidth = useSpring(lineWidthRaw, SPRING_OPTIONS);
    const linkWidth = useSpring(25, SPRING_OPTIONS);
  
    useEffect(() => {
      if (isHovered) {
        linkWidth.set(320);
      } else {
        linkWidth.set(25);
      }
    }, [isHovered]);
  
    if (title) {
      return (
        <a href={`#${id}`}>
          <motion.div
            ref={ref}
            className="group relative bg-neutral-500 transition-colors hover:bg-custom-blue"
            style={{ width: linkWidth, height: 2 }}
          >
            <AnimatePresence>
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-0  z-10 w-full pt-0 font-bold   text-neutral-500 transition-colors group-hover:text-custom-blue"
                  style={{
                    top: "-24px",
                    fontSize: "24px",
                    fontWeight: "400"
                    
                  }}
                >
                  {title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </a>
      );
    } else {
      return (
        <motion.div
          ref={ref}
          className="relative bg-neutral-500"
          style={{ width: lineWidth, height: 2 }}
        />
      );
    }
  };
  
  
  export default SideBarNav;


