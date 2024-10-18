import {
  Search,
  Compass,
  Calendar,
  Book,
  Music,
  Film,
  LucideIcon,
} from "lucide-react";
import { Input } from "@/src/components/Input";
import { Button } from "@/src/components/Button";
import classNames from "classnames";

type BookmarkCardProps = {
  icon: LucideIcon;
  label: string;
  color: string;
  onClick?: () => void;
};

const bookmarkItems = [
  { icon: Compass, label: "Explore", color: "bg-blue-600" },
  { icon: Calendar, label: "Calendar", color: "bg-green-600" },
  { icon: Book, label: "Library", color: "bg-yellow-600" },
  { icon: Music, label: "Music", color: "bg-red-600" },
  { icon: Film, label: "Videos", color: "bg-purple-600" },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-between p-4">
      <div className="w-full max-w-4xl flex flex-col items-center justify-center flex-grow">
        <h1 className="text-6xl font-semibold mb-8">NewSearch</h1>
        <form
          method="get"
          action="/search"
          className="w-full max-w-xl flex mb-4"
        >
          <Input
            type="search"
            name="input"
            id="input"
            placeholder="Search the web"
            className="flex-grow mr-2 font-medium border-2 bg-slate-900 border-slate-700 text-white placeholder-slate-400 placeholder:font-medium"
          />
          <Button
            variant="outline"
            size="icon"
            className="bg-transparent border-none hover:bg-slate-50"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Search</span>
          </Button>
        </form>
        <div className="flex justify-center space-x-4 mt-8">
          {bookmarkItems.map(({ icon, label, color }) => (
            <BookmarkCard key={label} icon={icon} label={label} color={color} />
          ))}
        </div>
      </div>
      <footer className="w-full max-w-4xl mt-8 flex justify-center space-x-4 text-sm text-slate-400">
        {["Privacy Policy", "Terms of Service", "About", "Contact"].map(
          (text) => (
            <a
              key={text}
              href="#"
              className="hover:text-white font-medium transition-colors"
            >
              {text}
            </a>
          ),
        )}
      </footer>
    </div>
  );
};

const BookmarkCard: React.FC<BookmarkCardProps> = ({
  icon: Icon,
  label,
  color,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center group cursor-pointer"
    >
      <div
        className={classNames(
          "w-16 h-16 rounded-lg flex items-center justify-center mb-2 transition-colors duration-200 ease-in-out",
          color,
          "group-hover:bg-opacity-70",
        )}
      >
        <Icon className="h-8 w-8 text-white" />
      </div>
      <span className="text-sm group-hover:text-slate-300 transition-colors duration-200 ease-in-out">
        {label}
      </span>
    </div>
  );
};

export default Home;
