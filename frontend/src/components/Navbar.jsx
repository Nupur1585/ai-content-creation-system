import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Sparkles,
  History,
  User,
  LogOut,
  Menu,
  X,
  Plus,
  LayoutDashboard,
} from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/95 backdrop-blur">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex h-16 items-center justify-between">

            {/* ================= LOGO ================= */}
            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B11226] shadow-lg shadow-red-900/30">
                <Sparkles size={21} />
              </div>

              <div>
                <h1 className="text-lg font-bold text-white">
                  AI Content
                </h1>

                <p className="hidden text-xs text-gray-500 sm:block">
                  Creation System
                </p>
              </div>
            </Link>

            {/* ================= DESKTOP NAVIGATION ================= */}
            <div className="hidden items-center gap-2 md:flex">

              <Link
                to="/"
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                  isActive("/")
                    ? "bg-[#B11226]/15 text-[#F43F5E]"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <LayoutDashboard size={17} />
                Dashboard
              </Link>

              <Link
                to="/create"
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                  isActive("/create")
                    ? "bg-[#B11226]/15 text-[#F43F5E]"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Plus size={17} />
                Create
              </Link>

              <Link
                to="/history"
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                  isActive("/history")
                    ? "bg-[#B11226]/15 text-[#F43F5E]"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <History size={17} />
                History
              </Link>

            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="hidden items-center gap-3 md:flex">

              <Link
                to="/profile"
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive("/profile")
                    ? "bg-[#B11226]/15 text-[#F43F5E]"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <User size={18} />
                Profile
              </Link>

              <button
                className="flex items-center gap-2 rounded-lg bg-[#B11226] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#7F0D1B]"
              >
                <LogOut size={17} />
                Logout
              </button>

            </div>

            {/* ================= MOBILE BUTTON ================= */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="rounded-lg p-2 text-gray-300 hover:bg-white/5 md:hidden"
            >
              {mobileMenu ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </div>

          {/* ================= MOBILE MENU ================= */}
          {mobileMenu && (
            <div className="border-t border-white/10 py-4 md:hidden">

              <div className="space-y-1">

                <Link
                  to="/"
                  onClick={() => setMobileMenu(false)}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium ${
                    isActive("/")
                      ? "bg-[#B11226]/15 text-[#F43F5E]"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </Link>

                <Link
                  to="/create"
                  onClick={() => setMobileMenu(false)}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium ${
                    isActive("/create")
                      ? "bg-[#B11226]/15 text-[#F43F5E]"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Plus size={18} />
                  Create Content
                </Link>

                <Link
                  to="/history"
                  onClick={() => setMobileMenu(false)}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium ${
                    isActive("/history")
                      ? "bg-[#B11226]/15 text-[#F43F5E]"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <History size={18} />
                  History
                </Link>

                <Link
                  to="/profile"
                  onClick={() => setMobileMenu(false)}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium ${
                    isActive("/profile")
                      ? "bg-[#B11226]/15 text-[#F43F5E]"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <User size={18} />
                  Profile
                </Link>

                <button
                  className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-950/30"
                >
                  <LogOut size={18} />
                  Logout
                </button>

              </div>

            </div>
          )}

        </div>
      </nav>

      {/* ================= PAGE CONTENT ================= */}
      <Outlet />

    </div>
  );
}

export default Navbar;