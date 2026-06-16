import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger } from "@/components/ui/sidebar";
import { Music, Search, Home, Library, Download, Settings, LogOut, Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useState } from "react";

const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488367304/PscmKkJeD4EWYQ6pP4Xypu/shulker-logo-Suh546yWtj6fdV4htTetNB.webp";

export default function AppPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border flex flex-col">
        <div className="p-6 border-b border-border flex items-center gap-3">
          <img src={LOGO} alt="Shulker" className="w-8 h-8" />
          <span className="text-lg font-bold text-primary">Shulker</span>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <nav className="space-y-2">
            {[
              { icon: Home, label: "Home", active: true },
              { icon: Search, label: "Search", active: false },
              { icon: Library, label: "Library", active: false },
              { icon: Download, label: "Downloads", active: false },
            ].map((item, idx) => (
              <Button
                key={idx}
                variant={item.active ? "default" : "ghost"}
                className="w-full justify-start"
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">PLAYLISTS</h3>
            <div className="space-y-2">
              {["Favorites", "Chill Vibes", "Workout Mix", "New Discoveries"].map((playlist, idx) => (
                <Button key={idx} variant="ghost" className="w-full justify-start text-sm">
                  {playlist}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-border space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start text-destructive">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="h-16 bg-card border-b border-border flex items-center px-6 gap-4">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search songs, artists, albums..."
                className="pl-10 bg-background border-border"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Welcome back!</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Now Playing */}
          <Card className="mb-8 p-6 bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Music className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Now Playing</p>
                <h2 className="text-2xl font-bold mb-2">Untitled Track</h2>
                <p className="text-muted-foreground mb-4">Unknown Artist</p>
                <div className="flex items-center gap-4">
                  <Button size="sm" variant="outline">
                    <SkipBack className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </Button>
                  <Button size="sm" variant="outline">
                    <SkipForward className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Recent Tracks */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Recently Played</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((idx) => (
                <Card
                  key={idx}
                  className="p-4 hover:shadow-lg hover:border-accent transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-full aspect-square bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg mb-4 flex items-center justify-center group-hover:from-primary/50 group-hover:to-accent/50 transition-colors">
                    <Music className="w-8 h-8 text-primary/60" />
                  </div>
                  <h4 className="font-semibold truncate">Track Title</h4>
                  <p className="text-sm text-muted-foreground truncate">Artist Name</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Trending */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Trending Now</h3>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((idx) => (
                <Card
                  key={idx}
                  className="p-4 hover:bg-card/80 transition-colors cursor-pointer flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-accent/30 rounded flex items-center justify-center flex-shrink-0 group-hover:from-primary/50 group-hover:to-accent/50 transition-colors">
                    <Music className="w-6 h-6 text-primary/60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold truncate">Trending Track {idx}</h4>
                    <p className="text-sm text-muted-foreground truncate">Artist Name</p>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Play className="w-4 h-4" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Player Controls */}
        <div className="h-20 bg-card border-t border-border px-6 flex items-center gap-4">
          <div className="flex-1 min-w-0">
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-accent" />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>1:24</span>
              <span>4:00</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-muted-foreground" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-24 h-1 bg-muted rounded-full appearance-none cursor-pointer"
            />
            <span className="text-xs text-muted-foreground w-8 text-right">{volume}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
