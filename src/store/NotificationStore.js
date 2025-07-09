import { create } from 'zustand';

export const useNotificationStore = create((set) => ({
  notifications: [],
  unreadCount: 0,
  
  addNotification: (message) =>
    set((state) => ({
      notifications: [
        { id: Date.now(), message, read: false, timestamp: new Date() },
        ...state.notifications.slice(0, 19), // Son 20 bildirimi tut
      ],
      unreadCount: state.unreadCount + 1,
    })),
    
  markAllRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, read: true })),
      unreadCount: 0,
    })),
    
  markOneRead: (id) =>
    set((state) => {
      const updated = state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      );
      const newCount = updated.filter((n) => !n.read).length;
      return { notifications: updated, unreadCount: newCount };
    }),
    
  markOneUnread: (id) =>
    set((state) => {
      const updated = state.notifications.map((n) =>
        n.id === id ? { ...n, read: false } : n
      );
      const newCount = updated.filter((n) => !n.read).length;
      return { notifications: updated, unreadCount: newCount };
    }),
}));
