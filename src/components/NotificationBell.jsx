import { Bell, X, MailOpen, CheckCheck, Mail } from "lucide-react";
import { useNotificationStore } from "../store/NotificationStore";
import { useState, useEffect, useRef } from "react";

export default function NotificationBell() {
  const {
    notifications,
    unreadCount,
    markAllRead,
    markOneRead,
    markOneUnread,
  } = useNotificationStore();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleMarkRead = (e, id) => {
    e.stopPropagation();
    markOneRead(id);
  };

  const handleMarkUnread = (e, id) => {
    e.stopPropagation();
    markOneUnread(id);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleOpen}
        className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
      >
        <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
            {unreadCount > 99 ? "99+" : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-gray-200 dark:border-gray-700 z-50 max-h-[80vh] flex flex-col">
          <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
              Notifications
            </h3>
            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <button
                  onClick={markAllRead}
                  className="text-xs text-slate-600 dark:text-slate-400 hover:underline flex items-center gap-1 hover:text-slate-800 dark:hover:text-slate-200"
                >
                  <CheckCheck size={14} />
                  <span className="hidden sm:inline">Mark all as read</span>
                </button>
              )}
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                <Bell className="mx-auto mb-2 h-8 w-8 opacity-50" />
                <p>No notifications yet</p>
              </div>
            ) : (
              <ul className="divide-y divide-gray-100 dark:divide-gray-700">
                {notifications.map((notification) => (
                  <li
                    key={notification.id}
                    className={`relative group hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                      !notification.read
                        ? "bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500"
                        : "bg-white dark:bg-gray-800"
                    }`}
                  >
                    <div className="p-3 sm:p-4 flex items-start gap-3">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          !notification.read
                            ? "bg-orange-500"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      />

                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-sm ${
                            !notification.read
                              ? "font-semibold text-gray-900 dark:text-white"
                              : "text-gray-500 dark:text-gray-400"
                          }`}
                        >
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                          {formatTime(notification.timestamp)}
                        </p>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {!notification.read ? (
                          <button
                            onClick={(e) => handleMarkRead(e, notification.id)}
                            className="p-1 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700 rounded transition-colors"
                            title="Mark as read"
                          >
                            <MailOpen size={14} />
                          </button>
                        ) : (
                          <button
                            onClick={(e) =>
                              handleMarkUnread(e, notification.id)
                            }
                            className="p-1 text-orange-600 hover:bg-orange-100 dark:hover:bg-orange-900/20 rounded transition-colors"
                            title="Mark as unread"
                          >
                            <Mail size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
