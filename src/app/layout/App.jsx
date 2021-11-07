import { Route, Routes } from 'react-router';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import HomePage from './HomePage';
import Layout from './Layout';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<Layout />} >
            <Route path="events" element={<EventDashboard />} />
            <Route path="events/:id" element={<EventDetailedPage />} />  
            <Route path="create" element={<EventForm />} />
            <Route path="manage/:id" element={<EventForm />} />
          </Route>   
      </Routes>
    </>
  );
};

export default App;
