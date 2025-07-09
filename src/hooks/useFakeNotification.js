import { useEffect } from "react";
import { useNotificationStore } from "../store/NotificationStore";

const fakeMessages = [
  "New user registered successfully",
  "System backup completed",
  "Payment received from client",
  "Server maintenance scheduled",
  "New comment added to project",
  "Database optimization finished",
  "Security scan completed",
  "User profile updated",
  "New message received",
  "System performance improved",
  "Cache cleared successfully",
  "Email notification sent",
  "File upload completed",
  "Account settings updated",
  "Login attempt detected"
];

export default function useFakeNotification() {
  const addNotification = useNotificationStore((state) => state.addNotification);

  useEffect(() => {
    const interval = setInterval(() => {
      const message = fakeMessages[Math.floor(Math.random() * fakeMessages.length)];
      addNotification(message);
    }, 15000); 

    return () => clearInterval(interval);
  }, [addNotification]);
}
