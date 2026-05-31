import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import Tasks from './components/Tasks';
import Grades from './components/Grades';
import Messages from './components/Messages';
import Profile from './components/Profile';
import { StudyMaterials } from './components/StudyMaterials';
import AccessibilityToolbar from './components/AccessibilityToolbar';

import { currentUser, courses, tasks, grades, messages, announcements, studyMaterials } from './data/mockData';

export default function App() {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard':
        return <Dashboard courses={courses} tasks={tasks} grades={grades} announcements={announcements} />;
      case 'cursos':
        return <Courses courses={courses} />;
      case 'material-estudio':
        return <StudyMaterials materials={studyMaterials} />;
      case 'tareas':
        return <Tasks tasks={tasks} />;
      case 'calificaciones':
        return <Grades grades={grades} />;
      case 'mensajes':
        return <Messages messages={messages} />;
      case 'perfil':
        return <Profile usuario={currentUser} />;
      default:
        return <Dashboard courses={courses} tasks={tasks} grades={grades} announcements={announcements} />;
    }
  };

  return (
    <div className="app">
      <Navbar usuario={currentUser} />
      <div className="app-container">
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <main className="main-content">
          <div className="content-wrapper">
            {renderContent()}
          </div>
        </main>
      </div>
      <AccessibilityToolbar />
    </div>
  );
}
