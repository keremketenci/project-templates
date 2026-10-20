import { useTranslation } from "react-i18next";
import { Button } from "@/shadcn/ui/button";
import { useSettings } from "@/settings/SettingsContext";
import { LANGUAGES, LANGUAGE_NAMES, THEMES } from "@/lib/settings";

export default function App() {
  const { t } = useTranslation();
  const { settings, updateSettings } = useSettings();

  return (
    <main className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">{t("settings.title")}</h1>

      <section className="space-y-2">
        <h2 className="text-muted-foreground">{t("settings.language")}</h2>
        <div className="flex gap-2">
          {LANGUAGES.map((language) => (
            <Button
              key={language}
              variant={settings.language === language ? "default" : "outline"}
              onClick={() => updateSettings({ language })}
            >
              {LANGUAGE_NAMES[language]}
            </Button>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-muted-foreground">{t("settings.theme")}</h2>
        <div className="flex gap-2">
          {THEMES.map((theme) => (
            <Button
              key={theme}
              variant={settings.theme === theme ? "default" : "outline"}
              onClick={() => updateSettings({ theme })}
            >
              {t(`theme.${theme}`)}
            </Button>
          ))}
        </div>
      </section>
    </main>
  );
}
