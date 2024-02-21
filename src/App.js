import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store';

import ButtonAppBar from './components/nav-bar-related/navBar';
import LoginButton from './components/nav-bar-related/loginButton';
import RegisterButton from './components/nav-bar-related/resgisterButton';

import HomePage from './components/homePage';

import ShowDoctor from './components/doctor-related/doctor';
import DoctorDetail from './components/doctor-related/doctorDetail';
import DoctorCreate from './components/doctor-related/doctorCreate';
import DoctorUpdate from './components/doctor-related/doctorUpdate';

import ShowSpeciality from './components/speciality';

import ShowAllAppointments from './components/appointment-related/showAppointment';
import AppointmentsDoctor from './components/appointment-related/appointmentDoctor';
import AppointmentCreate from './components/appointment-related/createAppointment';
import UpdateAppointmentForm from './components/appointment-related/updateAppointment';
import ArrangeAppointmentButton from './components/appointment-related/arrangeAppointment';
import DisarrangeAppointmentButton from './components/appointment-related/disarrangeAppointment';
import DeleteAppointment from './components/appointment-related/deleteAppointment';
import ShowUserAppointments from './components/appointment-related/showUserAppointments';

import UserList from './components/user-related/showUsers';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ButtonAppBar />
          <Container maxWidth="sm">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/login" element={<LoginButton />} />
              <Route exact path="/register" element={<RegisterButton />} />
              <Route exact path="/doctor" element={<ShowDoctor />} />
              <Route exact path="/doctor/create" element={<DoctorCreate />} />
              <Route path="/doctor/update/:id" element={<DoctorUpdate />} />
              <Route path="/doctor/:id" element={<DoctorDetail />} />
              <Route exact path="/speciality" element={<ShowSpeciality />} />
              <Route exact path="/appointment" element={<ShowAllAppointments />} />
              <Route path="/appointments/create/:id" element={<AppointmentCreate />} />
              <Route path="appointments/update/:id" element={<UpdateAppointmentForm />} />
              <Route path="/appointments/arrange/:id" element={<ArrangeAppointmentButton />} />
              <Route path="/appointments/disarrange/:id" element={<DisarrangeAppointmentButton />} />
              <Route path="/appointments/doctor/:id" element={<AppointmentsDoctor />} />
              <Route path="/appointments/delete/:id" element={<DeleteAppointment />} />
              <Route exact path="/patient/" element={<UserList />} />
              <Route path="/patient/:id" element={<ShowUserAppointments />} />
            </Routes>
          </Container>
        </Router>
      </PersistGate>
    </Provider>
  );
}


export default App;