import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, onValue, off } from 'firebase/database'

// Firebase configuration - users should add their own config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ''
}

// Check if Firebase is configured
export const isFirebaseConfigured = () => {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.databaseURL)
}

// Initialize Firebase only if configured
let app: any = null
let database: any = null

if (isFirebaseConfigured()) {
  try {
    app = initializeApp(firebaseConfig)
    database = getDatabase(app)
  } catch (error) {
    console.warn('Firebase initialization failed:', error)
  }
}

export { database }

// Firebase service functions
export const firebaseService = {
  // Get room reference
  getRoomRef: (roomId: string) => {
    if (!database) return null
    return ref(database, `rooms/${roomId}`)
  },

  // Update data at a path
  updateData: async (path: string, data: any) => {
    if (!database) {
      console.warn('Firebase not configured - data not synced')
      return
    }
    try {
      await set(ref(database, path), data)
    } catch (error) {
      console.error('Firebase update failed:', error)
    }
  },

  // Listen to data changes
  listenToData: (path: string, callback: (data: any) => void) => {
    if (!database) return () => {}

    const dataRef = ref(database, path)
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val()
      callback(data)
    })

    // Return unsubscribe function
    return () => off(dataRef)
  },

  // Generate room ID
  generateRoomId: () => {
    return Math.random().toString(36).substring(2, 15)
  }
}
