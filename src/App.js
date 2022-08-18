import { useRef } from 'react';
import { BryntumGantt, BryntumProjectModel } from '@bryntum/gantt-react';
import { ganttConfig } from './GanttMissionMarsConfig';
import { projectConfig } from './ProjectConfig';
import './App.scss';

function App() {
  const project = useRef();
  return (
    <>
      <BryntumProjectModel {...projectConfig} ref={project} />
      <BryntumGantt {...ganttConfig} project={project} />
    </>
  );
}

// If you plan to use stateful React collections for data binding please check this guide
// https://www.bryntum.com/docs/gantt/guide/Gantt/integration/react/data-binding

export default App;
