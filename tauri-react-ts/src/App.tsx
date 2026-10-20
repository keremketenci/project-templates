import { SettingsPanel } from "@/components/SettingsPanel";

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col">
      {/* The top padding keeps the header clear of phone notches and status bars */}
      <header className="pt-[env(safe-area-inset-top)]">
        <div className="flex h-14 items-center justify-end px-4">
          <SettingsPanel />
        </div>
      </header>

      {/* Each app fills this area with its own content */}
      <main className="flex-1" />
    </div>
  );
}
