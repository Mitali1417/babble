# BABBLE - MERN Chat App

A modern, full-featured real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and enhanced with TanStack Query, Zustand, Formik, Yup, and more.

---

## 🚀 Features

- **Authentication**: Secure login/signup with JWT, guest login, and form validation.
- **Real-Time Chat**: One-on-one and group chat with instant messaging via Socket.io.
- **Unread Message Badges**: See unread counts in the chat sidebar.
- **Auto-Scroll**: Chat auto-scrolls to the latest message.
- **Responsive UI**: Fully mobile and desktop friendly.
- **Emoji Picker**: Add emojis to your messages.
- **Browser Notifications**: Get notified of new messages even when the app is in the background.
- **Typing Indicator**: See when others are typing (with user names in group chats).
- **Group Chat Management**: Admins can manage group members and settings.
- **Message Reactions**: React to messages with emojis.
- **Edit/Delete Messages**: Edit or delete your own messages.
- **Pinned Messages**: Pin important messages in a chat.
- **User Presence**: See who is online/offline.
- **Message Search**: Search messages within a chat.
- **404 Not Found Page**: Friendly error page for invalid routes.

---

## 🗂️ Folder Structure

```
frontend/
  src/
    api/           # API functions and TanStack Query hooks
    assets/        # Images, sounds, etc.
    components/    # React components (UI, shared, Authentication, etc.)
    context/       # React context providers (e.g., ThemeProvider)
    forms/         # Formik/Yup validation schemas
    hooks/         # Custom React hooks (e.g., useAutoScroll, useNotifications)
    pages/         # Page-level components (e.g., Chatpage, Authpage, NotFound)
    state/         # Zustand stores for global state
    utils/         # Utility functions
    ...
backend/
  ...             # Express, MongoDB, and Socket.io server code
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or Atlas)

### 1. Clone the Repository
```
git clone https://github.com/yourusername/mern-chat-app.git
cd mern-chat-app
```

### 2. Install Dependencies
```
cd frontend
npm install
# (and in backend, if present)
cd ../backend
npm install
```

### 3. Environment Variables
- Create a `.env` file in the backend with your MongoDB URI, JWT secret, etc.
- Example:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4. Run the App
- **Backend:**
  ```
  cd backend
  npm run dev
  ```
- **Frontend:**
  ```
  cd frontend
  npm run dev
  ```
- Visit [http://localhost:5173](http://localhost:5173) (or your Vite port)

---

## ✨ Customization
- **Theme:** Light/dark mode toggle, system default.
- **Notification Sound:** Replace `public/message.mp3` with your preferred sound.
- **Branding:** Update logos in `public/` and `src/assets/`.

---

## 🤝 Contributing

1. Fork the repo and create your branch: `git checkout -b feature/your-feature`
2. Commit your changes: `git commit -m 'Add some feature'`
3. Push to the branch: `git push origin feature/your-feature`
4. Open a Pull Request

Please follow the existing code style and add tests where appropriate.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements
- [React](https://react.dev/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [Socket.io](https://socket.io/)
- [emoji-mart](https://github.com/missive/emoji-mart)

---

Happy chatting! 💬

  
