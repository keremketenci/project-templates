import { Button } from "@/shadcn/ui/button";
import { useSettings } from "@/settings/SettingsContext";
import { THEMES } from "@/lib/settings";

export default function App() {
  const { settings, updateSettings } = useSettings();

  return (
    <main className="space-y-4 p-6">
      <h1 className="text-2xl font-bold">Theme test</h1>
      <p className="text-muted-foreground">Current theme: {settings.theme}</p>
      <div className="flex gap-2">
        {THEMES.map((theme) => (
          <Button
            key={theme}
            variant={settings.theme === theme ? "default" : "outline"}
            onClick={() => updateSettings({ theme })}
          >
            {theme}
          </Button>
        ))}
      </div>
    </main>
  );
}
