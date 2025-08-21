import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Gamepad2, 
  Trophy, 
  Activity, 
  History, 
  Star, 
  User, 
  Home, 
  ChevronRight,
  Menu
} from "lucide-react";

type Tab = 'casino' | 'winners' | 'activity' | 'history' | 'top' | 'profile' | 'home';

interface LeftSidebarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  expanded: boolean;
  onToggle: () => void;
}

const LeftSidebar = ({ activeTab, onTabChange, expanded, onToggle }: LeftSidebarProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const tabs = [
    { id: 'home' as Tab, label: 'Home', icon: Home, color: 'text-accent' },
    { id: 'casino' as Tab, label: 'Casino', icon: Gamepad2, color: 'text-primary' },
    { id: 'winners' as Tab, label: 'Winners', icon: Trophy, color: 'text-warning' },
    { id: 'activity' as Tab, label: 'Activity', icon: Activity, color: 'text-accent' },
    { id: 'history' as Tab, label: 'History', icon: History, color: 'text-info' },
    { id: 'top' as Tab, label: 'Top Players', icon: Star, color: 'text-warning' },
    { id: 'profile' as Tab, label: 'Profile', icon: User, color: 'text-secondary' }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden fixed top-20 left-4 z-50 glass-medium"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <Menu className="h-4 w-4" />
      </Button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ 
          width: expanded ? 200 : 72,
          x: isMobileOpen ? 0 : (window.innerWidth < 768 ? -72 : 0)
        }}
        className={`
          glass-heavy border-r border-white/20 flex flex-col relative z-45
          ${isMobileOpen ? 'fixed md:relative' : 'hidden md:flex'}
        `}
      >
        {/* Toggle Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="hidden md:flex absolute -right-3 top-6 w-6 h-6 rounded-full glass-medium hover:glass-heavy z-10"
        >
          <ChevronRight className={`h-3 w-3 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </Button>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant={activeTab === tab.id ? "default" : "ghost"}
                size="sm"
                onClick={() => {
                  onTabChange(tab.id);
                  setIsMobileOpen(false);
                }}
                className={`
                  w-full justify-start gap-3 h-12 holographic
                  ${activeTab === tab.id ? 'neomorphic animate-glow' : 'glass-light hover:glass-medium'}
                `}
              >
                <tab.icon className={`h-5 w-5 flex-shrink-0 ${tab.color}`} />
                <AnimatePresence>
                  {expanded && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      className="truncate"
                    >
                      {tab.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/20">
          <div className="neomorphic-inset p-2 text-center">
            <AnimatePresence>
              {expanded ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-muted-foreground"
                >
                  TEN Casino v2.0
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xl"
                >
                  🎰
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default LeftSidebar;