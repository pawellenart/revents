import { Route, Routes } from 'react-router';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import Sandbox from '../../features/sandbox/Sandbox';
import HomePage from './HomePage';
import Layout from './Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Layout />}>
          <Route path="events" element={<EventDashboard />} />
          <Route path="sandbox" element={<Sandbox />} />
          <Route path="events/:eventId" element={<EventDetailedPage />} />
          <Route path="events/manage/:eventId" element={<EventForm />} />
          <Route path="events/create" element={<EventForm />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
