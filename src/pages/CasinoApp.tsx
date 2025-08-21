import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/casino/Header";
import LeftSidebar from "@/components/casino/LeftSidebar";
import PoolCard from "@/components/casino/PoolCard";
import ConfirmationModal from "@/components/casino/ConfirmationModal";
import GuideModal from "@/components/casino/GuideModal";
import Sidebar from "@/components/casino/Sidebar";
import ProfilePage from "@/components/casino/ProfilePage";
import { useToast } from "@/hooks/use-toast";

type Tab = 'casino' | 'winners' | 'activity' | 'history' | 'top' | 'profile' | 'home';
type PoolType = 'lightning' | 'thunder' | 'mega' | 'grand';
type EntryStatus = 'ready' | 'entered' | 'awaiting';

const CasinoApp = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<Tab>('casino');
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [confirmModal, setConfirmModal] = useState<{ open: boolean; pool?: PoolType }>({ open: false });
  const [guideModal, setGuideModal] = useState(false);
  const [entryStatus, setEntryStatus] = useState<Record<PoolType, EntryStatus>>({
    lightning: 'ready',
    thunder: 'ready', 
    mega: 'ready',
    grand: 'ready'
  });

  const pools = [
    {
      id: 'lightning' as PoolType,
      name: 'Lightning Strike',
      emoji: '⚡',
      entryFee: 0.001,
      currentPrize: 0.045,
      maxPrize: 0.05,
      playerCount: 45,
      maxPlayers: 50,
      timeRemaining: 125,
      winners: ['0x1234...5678', '0x9abc...def0', '0x1357...2468']
    },
    {
      id: 'thunder' as PoolType,
      name: 'Thunder Roll',
      emoji: '🌩️',
      entryFee: 0.002,
      currentPrize: 0.098,
      maxPrize: 0.12,
      playerCount: 49,
      maxPlayers: 60,
      timeRemaining: 89,
      winners: ['0x2468...1357', '0xabcd...1234', '0x5678...9abc']
    },
    {
      id: 'mega' as PoolType,
      name: 'Mega Spin',
      emoji: '🎰',
      entryFee: 0.003,
      currentPrize: 0.189,
      maxPrize: 0.21,
      playerCount: 63,
      maxPlayers: 70,
      timeRemaining: 234,
      winners: ['0x3579...2468', '0xdef0...5678', '0x1111...2222']
    },
    {
      id: 'grand' as PoolType,
      name: 'Grand Slam',
      emoji: '💎',
      entryFee: 0.005,
      currentPrize: 0.325,
      maxPrize: 0.40,
      playerCount: 65,
      maxPlayers: 80,
      timeRemaining: 456,
      winners: ['0x4680...1357', '0x7890...abcd', '0x3333...4444']
    }
  ];

  const handlePoolEntry = (poolId: PoolType) => {
    const status = entryStatus[poolId];
    if (status === 'ready') {
      setConfirmModal({ open: true, pool: poolId });
    } else if (status === 'entered') {
      toast({
        title: "Already Entered",
        description: "You're already in this pool. Good luck!",
      });
    }
  };

  const confirmEntry = async () => {
    if (!confirmModal.pool) return;
    
    // Simulate blockchain transaction
    setEntryStatus(prev => ({ ...prev, [confirmModal.pool!]: 'awaiting' }));
    setConfirmModal({ open: false });
    
    toast({
      title: "Entry Submitted",
      description: "Your pool entry is being processed...",
    });

    // Simulate transaction completion
    setTimeout(() => {
      setEntryStatus(prev => ({ ...prev, [confirmModal.pool!]: 'entered' }));
      toast({
        title: "Entry Confirmed!",
        description: "You're now in the pool. Good luck!",
        variant: "default"
      });
    }, 3000);
  };

  const renderMainContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfilePage />;
      case 'casino':
      default:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {pools.map((pool, index) => (
              <motion.div
                key={pool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PoolCard
                  pool={pool}
                  entryStatus={entryStatus[pool.id]}
                  onEntry={() => handlePoolEntry(pool.id)}
                  onGuide={() => setGuideModal(true)}
                />
              </motion.div>
            ))}
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onGuide={() => setGuideModal(true)} />
      
      <div className="flex flex-1">
        <LeftSidebar 
          activeTab={activeTab}
          onTabChange={setActiveTab}
          expanded={sidebarExpanded}
          onToggle={() => setSidebarExpanded(!sidebarExpanded)}
        />

        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {renderMainContent()}
          </div>
        </main>

        <Sidebar 
          activeTab={activeTab}
          pools={pools}
        />
      </div>

      <ConfirmationModal
        open={confirmModal.open}
        pool={confirmModal.pool ? pools.find(p => p.id === confirmModal.pool) : undefined}
        onClose={() => setConfirmModal({ open: false })}
        onConfirm={confirmEntry}
      />

      <GuideModal
        open={guideModal}
        onClose={() => setGuideModal(false)}
      />
    </div>
  );
};

export default CasinoApp;