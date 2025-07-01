import { createBrowserRouter } from 'react-router'
import Main from '../Layout/Main'
import HomePage from '../Page/HomePage/HomePage'
import Contact from '../Page/Contact/Contact'
import About from '../Page/About/About'
import SingleStudyAbroad from '../Page/SingleStudyAboard/SingleStudyAbroad'
import StudyConsultation from '../Page/StudyConsultation/StudyConsultation'
import AdmissionsSupport from '../Page/AdmissionsSupport/AdmissionsSupport'
import VisaApplication from '../Page/VisaApplication/VisaApplication'
import PreDepartureAdvice from '../Page/PreDepartureAdvice/PreDepartureAdvice'
import OngoingSupport from '../Page/OngoingSupport/OngoingSupport'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/study/malaysia',
        element: <SingleStudyAbroad />
      },
      {
        path: '/consultation',
        element: <StudyConsultation />
      },
      {
        path: '/admissions',
        element: <AdmissionsSupport />
      },
      // {
      //     path: "/visa",
      //     element: <VisaApplication />,
      // },
      {
        path: '/pre-departure',
        element: <PreDepartureAdvice />
      }
      // {
      //     path: "/ongoing-support",
      //     element: <OngoingSupport />,
      // },
    ]
  }
])
