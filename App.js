import { StatusBar } from 'expo-status-bar';
import Navigation from './app/navigations/Navigation';
import { firebaseApp } from './app/service/firebase';

export default function App() {
  return <Navigation />
}
