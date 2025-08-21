import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Activity, History, Star } from "lucide-react";

type Tab = 'casino' | 'winners' | 'activity' | 'history' | 'top' | 'profile' | 'home';

interface SidebarProps {
  activeTab: Tab;
  pools: any[];
}

const Sidebar = ({ activeTab, pools }: SidebarProps) => {
  if (activeTab === 'casino' || activeTab === 'profile') return null;

  const mockData = {
    winners: Array.from({ length: 10 }, (_, i) => ({
      address: `0x${Math.random().toString(16).slice(2, 8)}...${Math.random().toString(16).slice(2, 6)}`,
      pool: pools[i % pools.length]?.name || 'Lightning Strike',
      prize: (Math.random() * 0.1).toFixed(3),
      time: `${Math.floor(Math.random() * 60)}m ago`
    })),
    activity: Array.from({ length: 10 }, (_, i) => ({
      address: `0x${Math.random().toString(16).slice(2, 8)}...${Math.random().toString(16).slice(2, 6)}`,
      action: Math.random() > 0.5 ? 'Entered' : 'Won',
      pool: pools[i % pools.length]?.name || 'Thunder Roll',
      amount: (Math.random() * 0.05).toFixed(3),
      time: `${Math.floor(Math.random() * 120)}m ago`
    }))
  };

  const getContent = () => {
    switch (activeTab) {
      case 'winners':
        return (
          <div className="space-y-3">
            {mockData.winners.map((winner, i) => (
              <Card key={i} className="glass-light">
                <CardContent className="p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Trophy className="h-4 w-4 text-warning" />
                    <span className="font-mono text-sm">{winner.address}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Won {winner.prize} TEN in {winner.pool}
                  </div>
                  <Badge variant="outline" className="mt-1 text-xs">{winner.time}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      case 'activity':
        return (
          <div className="space-y-3">
            {mockData.activity.map((activity, i) => (
              <Card key={i} className="glass-light">
                <CardContent className="p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Activity className="h-4 w-4 text-accent" />
                    <span className="font-mono text-sm">{activity.address}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {activity.action} {activity.pool} - {activity.amount} TEN
                  </div>
                  <Badge variant="outline" className="mt-1 text-xs">{activity.time}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      default:
        return <div className="text-center text-muted-foreground">No data available</div>;
    }
  };

  return (
    <aside className="w-80 glass-heavy border-l border-white/20 p-4 overflow-y-auto">
      <CardHeader className="px-0 pb-4">
        <CardTitle className="flex items-center gap-2">
          {activeTab === 'winners' && <><Trophy className="h-5 w-5 text-warning" />Recent Winners</>}
          {activeTab === 'activity' && <><Activity className="h-5 w-5 text-accent" />Live Activity</>}
          {activeTab === 'history' && <><History className="h-5 w-5 text-info" />Your History</>}
          {activeTab === 'top' && <><Star className="h-5 w-5 text-warning" />Top Players</>}
        </CardTitle>
      </CardHeader>
      {getContent()}
    </aside>
  );
};

export default Sidebar;