"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Compass,
  Calendar,
  Book,
  Music,
  Film,
  LucideIcon,
  Settings,
  X,
  Sun,
  Moon,
  ChevronDown,
} from "lucide-react";
import { Input } from "@/src/components/Input";
import { Button } from "@/src/components/Button";

import classNames from "classnames";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../components/Dropdown";
import { Language, translations } from "../config/languages";

type BookmarkCardProps = {
  icon: LucideIcon;
  label: string;
  gradient: string;
};

type Theme = "light" | "dark";

const Home: React.FC = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const [language, setLanguage] = useState("eng");
  const translation = translations[language as Language];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={classNames(
        "min-h-screen flex flex-col items-center justify-between p-4 relative overflow-hidden transition-colors duration-300",
        theme === "dark"
          ? "bg-slate-950 text-white"
          : "bg-gray-100 text-slate-900",
      )}
    >
      <div className="w-full max-w-4xl flex flex-col items-center justify-center flex-grow">
        <div className="absolute top-4 right-4 z-10 flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={classNames(
              "hover:bg-opacity-20",
              theme === "dark"
                ? "text-white hover:bg-white"
                : "text-slate-900 hover:bg-slate-900",
            )}
          >
            {theme === "dark" ? (
              <Sun className="h-6 w-6" />
            ) : (
              <Moon className="h-6 w-6" />
            )}
            <span className="sr-only">{translation.toggleTheme}</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSettingsOpen(true)}
            className={classNames(
              "hover:bg-opacity-20",
              theme === "dark"
                ? "text-white hover:bg-white"
                : "text-slate-900 hover:bg-slate-900",
            )}
          >
            <Settings className="h-6 w-6" />
            <span className="sr-only">{translation.openSettings}</span>
          </Button>
        </div>
        <h1 className="text-6xl font-semibold mb-8 drop-shadow-2xl">
          NewSearch
        </h1>
        <form
          method="get"
          action="/search"
          className="w-full max-w-xl flex mb-4"
        >
          <Input
            type="search"
            name="input"
            id="input"
            placeholder={translation.searchPlaceholder}
            className={classNames(
              "flex-grow mr-2 font-medium border-2",
              theme === "dark"
                ? "bg-slate-900 border-slate-700 text-white placeholder-slate-400"
                : "bg-white border-gray-300 text-slate-900 placeholder-gray-400",
            )}
          />
          <Button
            variant="outline"
            size="icon"
            className={classNames(
              "border-none bg-transparent",
              theme === "dark"
                ? "hover:bg-white hover:text-slate-950"
                : "hover:bg-white",
            )}
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">{translation.searchPlaceholder}</span>
          </Button>
        </form>
        <div className="flex justify-center space-x-4 mt-8">
          <BookmarkCard
            icon={Compass}
            label={translation.explore}
            gradient="from-blue-500 to-blue-600"
          />
          <BookmarkCard
            icon={Calendar}
            label={translation.calendar}
            gradient="from-green-500 to-green-600"
          />
          <BookmarkCard
            icon={Book}
            label={translation.library}
            gradient="from-yellow-500 to-yellow-600"
          />
          <BookmarkCard
            icon={Music}
            label={translation.music}
            gradient="from-red-500 to-red-600"
          />
          <BookmarkCard
            icon={Film}
            label={translation.videos}
            gradient="from-purple-500 to-purple-600"
          />
        </div>
      </div>
      <footer
        className={classNames(
          "w-full max-w-4xl mt-12 flex justify-center space-x-6 text-sm",
          theme === "dark" ? "text-slate-400" : "text-gray-600",
        )}
      >
        <a
          href="#"
          className={classNames(
            "font-medium transition-colors hover:underline",
            theme === "dark" ? "hover:text-white" : "hover:text-slate-900",
          )}
        >
          {translation.privacyPolicy}
        </a>
        <a
          href="#"
          className={classNames(
            "font-medium transition-colors hover:underline",
            theme === "dark" ? "hover:text-white" : "hover:text-slate-900",
          )}
        >
          {translation.termsOfService}
        </a>
        <a
          href="#"
          className={classNames(
            "font-medium transition-colors hover:underline",
            theme === "dark" ? "hover:text-white" : "hover:text-slate-900",
          )}
        >
          {translation.about}
        </a>
        <a
          href="#"
          className={classNames(
            "font-medium transition-colors hover:underline",
            theme === "dark" ? "hover:text-white" : "hover:text-slate-900",
          )}
        >
          {translation.contact}
        </a>
      </footer>

      <div
        className={classNames(
          "fixed top-0 right-0 h-full w-80 p-4 transform transition-transform duration-300 ease-in-out z-50",
          isSettingsOpen ? "translate-x-0" : "translate-x-full",
          theme === "dark" ? "bg-slate-950" : "bg-white text-slate-900",
        )}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">{translation.settings}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSettingsOpen(false)}
            className={classNames(
              "hover:bg-opacity-20",
              theme === "dark"
                ? "text-white hover:bg-white"
                : "text-slate-900 hover:bg-slate-900",
            )}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">{translation.closeSettings}</span>
          </Button>
        </div>
        <div className="space-y-4">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  {translation.setLanguage + " "}
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>
                  {translation.availableLanguages}:
                </DropdownMenuLabel>
                <DropdownMenuRadioGroup
                  value={language}
                  onValueChange={setLanguage}
                >
                  <DropdownMenuRadioItem value="eng">
                    English
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="tur">
                    Türkçe
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {isSettingsOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSettingsOpen(false)}
        ></div>
      )}
    </div>
  );
};

function BookmarkCard({ icon: Icon, label, gradient }: BookmarkCardProps) {
  return (
    <div className="flex flex-col items-center group cursor-pointer transform transition-all duration-300 drop-shadow-2xl hover:scale-110">
      <div
        className={classNames(
          "w-16 h-16 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 bg-gradient-to-br",
          gradient,
        )}
      >
        <Icon className="h-8 w-8 text-white transition-all duration-300 group-hover:scale-110" />
      </div>
      <span className="text-sm font-medium transition-all duration-300">
        {label}
      </span>
    </div>
  );
}

export default Home;
