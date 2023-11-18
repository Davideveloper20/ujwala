// NEW 3

// import React from 'react';
// import dynamic from "next/dynamic";

// import { Box } from '@mui/material';
// import moment from 'moment';
// // import { Calendar, momentLocalizer } from 'react-big-calendar-like-google';

// import 'react-big-calendar-like-google/lib/css/react-big-calendar.css';

// // import { Calendar, momentLocalizer } from 'react-big-calendar';

// // import BigCalendar from "react-big-calendar-like-google";
 

// import EventModal from '@/components/Modals/event-modal';

// import { useEventContext } from '@/contexts/event-context';


// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';

// moment.locale("en-GB");

// // const BigCalendar = dynamic(() => import('react-big-calendar'), {
// //   ssr: false, // Evita que se renderice en el servidor
// // });




// // const localizer = momentLocalizer(moment);

// const localizer = moment.locale("en");


// const BigCalendar = dynamic(() => import("react-big-calendar"), {
//   ssr: false, // Evita que se renderice en el servidor
// });

// BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));


// const allViews = Object.keys(BigCalendar.Views).map((k) => BigCalendar.Views[k]);



// export default function Calender() {
//   const { events, handleClickOpen } = useEventContext();

//   return (
//     <Box>
//       <Box className="container-fluid">
//         <Box className="row">
//           <Box className="col p-2">
//             <EventModal />
//           </Box>
//         </Box>
//       </Box>
//       <BigCalendar
//         // selectable
//         events={events}
//         defaultView="month"
//         scrollToTime={new Date(1970, 1, 1, 6)}
//         defaultDate={new Date()}
//         onSelectEvent={(event: any) => {
//           const data = {
//             _id: event._id,
//             title: event.title,
//             description: event.description,
//             bgColor: event.bgColor,
//             start: event.start,
//             end: event.end,
//           };
//           handleClickOpen(data);
//         }}
//         onSelectSlot={(slotInfo: any) => {
//           const data = {
//             start: slotInfo.start,
//             end: slotInfo.end,
//           };
//           handleClickOpen(data);
//         }}
//         localizer={localizer}
//       />
//     </Box>
//   );
// }


// NEW 2

// import React from "react";
// import dynamic from "next/dynamic";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// moment.locale("en-GB");

// const BigCalendar = dynamic(() => import('react-big-calendar'), {
//   ssr: false, // Evita que se renderice en el servidor
// });

// const { Views } = BigCalendar; // Importa las Views de BigCalendar

// const allViews = Object.keys(Views).map((k) => Views[k]);

// const events = [
//   {
//     'title': 'All Day Event very long title',
//     'allDay': true,
//     'start': new Date(2015, 3, 0),
//     'end': new Date(2015, 3, 1)
//   },
//   {
//     'title': 'Long Event',
//     'start': new Date(2015, 3, 7),
//     'end': new Date(2015, 3, 10)
//   },

//   {
//     'title': 'DTS STARTS',
//     'start': new Date(2016, 2, 13, 0, 0, 0),
//     'end': new Date(2016, 2, 20, 0, 0, 0)
//   },

//   {
//     'title': 'DTS ENDS',
//     'start': new Date(2016, 10, 6, 0, 0, 0),
//     'end': new Date(2016, 10, 13, 0, 0, 0)
//   },

//   {
//     'title': 'Some Event',
//     'start': new Date(2015, 3, 9, 0, 0, 0),
//     'end': new Date(2015, 3, 9, 0, 0, 0)
//   },
//   {
//     'title': 'Conference',
//     'start': new Date(2015, 3, 11),
//     'end': new Date(2015, 3, 13),
//     desc: 'Big conference for important people'
//   },
//   {
//     'title': 'Meeting',
//     'start': new Date(2015, 3, 12, 10, 30, 0, 0),
//     'end': new Date(2015, 3, 12, 12, 30, 0, 0),
//     desc: 'Pre-meeting meeting, to prepare for the meeting'
//   },
//   {
//     'title': 'Lunch',
//     'start': new Date(2015, 3, 12, 12, 0, 0, 0),
//     'end': new Date(2015, 3, 12, 13, 0, 0, 0),
//     desc: 'Power lunch'
//   },
//   {
//     'title': 'Meeting',
//     'start': new Date(2015, 3, 12, 14, 0, 0, 0),
//     'end': new Date(2015, 3, 12, 15, 0, 0, 0)
//   },
//   {
//     'title': 'Happy Hour',
//     'start': new Date(2015, 3, 12, 17, 0, 0, 0),
//     'end': new Date(2015, 3, 12, 17, 30, 0, 0),
//     desc: 'Most important meal of the day'
//   },
//   {
//     'title': 'Dinner',
//     'start': new Date(2015, 3, 12, 20, 0, 0, 0),
//     'end': new Date(2015, 3, 12, 21, 0, 0, 0)
//   },
//   {
//     'title': 'Birthday Party',
//     'start': new Date(2015, 3, 13, 7, 0, 0),
//     'end': new Date(2015, 3, 13, 10, 30, 0)
//   },
//   {
//     'title': 'Birthday Party 2',
//     'start': new Date(2015, 3, 13, 7, 0, 0),
//     'end': new Date(2015, 3, 13, 10, 30, 0)
//   },
//   {
//     'title': 'Birthday Party 3',
//     'start': new Date(2015, 3, 13, 7, 0, 0),
//     'end': new Date(2015, 3, 13, 10, 30, 0)
//   },
//   {
//     'title': 'Late Night Event',
//     'start': new Date(2015, 3, 17, 19, 30, 0),
//     'end': new Date(2015, 3, 18, 2, 0, 0)
//   },
//   {
//     'title': 'Multi-day Event',
//     'start': new Date(2015, 3, 20, 19, 30, 0),
//     'end': new Date(2015, 3, 22, 2, 0, 0)
//   }
// ]


// const CalendarPage = () => {
//   return (
//     <div style={{ height: 700 }}>
//       <BigCalendar
//         events={events}
//         step={60}
//         views={allViews}
//         defaultDate={new Date(2015, 3, 1)}
//         popup={false}
//         onShowMore={(events, date) => {
//           // Lógica para mostrar más eventos si es necesario
//         }}
//       />
//     </div>
//   );
// };

// export default CalendarPage;


// NEW


// import React from "react";
// import dynamic from "next/dynamic";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// moment.locale("en-GB");

// // import { Calendar, momentLocalizer } from 'react-big-calendar';


// const BigCalendar = dynamic(() => import("react-big-calendar"), {
//   ssr: false, // Evita que se renderice en el servidor
// });

// const allViews = Object.keys(BigCalendar.Views).map((k) => BigCalendar.Views[k]);

// const events = [
//   {
//     'title': 'All Day Event very long title',
//     'allDay': true,
//     'start': new Date(2015, 3, 0),
//     'end': new Date(2015, 3, 1)
//   },
//   {
//     'title': 'Long Event',
//     'start': new Date(2015, 3, 7),
//     'end': new Date(2015, 3, 10)
//   },

//   {
//     'title': 'DTS STARTS',
//     'start': new Date(2016, 2, 13, 0, 0, 0),
//     'end': new Date(2016, 2, 20, 0, 0, 0)
//   },

//   {
//     'title': 'DTS ENDS',
//     'start': new Date(2016, 10, 6, 0, 0, 0),
//     'end': new Date(2016, 10, 13, 0, 0, 0)
//   },

//   {
//     'title': 'Some Event',
//     'start': new Date(2015, 3, 9, 0, 0, 0),
//     'end': new Date(2015, 3, 9, 0, 0, 0)
//   },
//   {
//     'title': 'Conference',
//     'start': new Date(2015, 3, 11),
//     'end': new Date(2015, 3, 13),
//     desc: 'Big conference for important people'
//   },
//   {
//     'title': 'Meeting',
//     'start': new Date(2015, 3, 12, 10, 30, 0, 0),
//     'end': new Date(2015, 3, 12, 12, 30, 0, 0),
//     desc: 'Pre-meeting meeting, to prepare for the meeting'
//   },
//   {
//     'title': 'Lunch',
//     'start': new Date(2015, 3, 12, 12, 0, 0, 0),
//     'end': new Date(2015, 3, 12, 13, 0, 0, 0),
//     desc: 'Power lunch'
//   },
//   {
//     'title': 'Meeting',
//     'start': new Date(2015, 3, 12, 14, 0, 0, 0),
//     'end': new Date(2015, 3, 12, 15, 0, 0, 0)
//   },
//   {
//     'title': 'Happy Hour',
//     'start': new Date(2015, 3, 12, 17, 0, 0, 0),
//     'end': new Date(2015, 3, 12, 17, 30, 0, 0),
//     desc: 'Most important meal of the day'
//   },
//   {
//     'title': 'Dinner',
//     'start': new Date(2015, 3, 12, 20, 0, 0, 0),
//     'end': new Date(2015, 3, 12, 21, 0, 0, 0)
//   },
//   {
//     'title': 'Birthday Party',
//     'start': new Date(2015, 3, 13, 7, 0, 0),
//     'end': new Date(2015, 3, 13, 10, 30, 0)
//   },
//   {
//     'title': 'Birthday Party 2',
//     'start': new Date(2015, 3, 13, 7, 0, 0),
//     'end': new Date(2015, 3, 13, 10, 30, 0)
//   },
//   {
//     'title': 'Birthday Party 3',
//     'start': new Date(2015, 3, 13, 7, 0, 0),
//     'end': new Date(2015, 3, 13, 10, 30, 0)
//   },
//   {
//     'title': 'Late Night Event',
//     'start': new Date(2015, 3, 17, 19, 30, 0),
//     'end': new Date(2015, 3, 18, 2, 0, 0)
//   },
//   {
//     'title': 'Multi-day Event',
//     'start': new Date(2015, 3, 20, 19, 30, 0),
//     'end': new Date(2015, 3, 22, 2, 0, 0)
//   }
// ]


// // const events = [
// //   // Define tus eventos aquí
// // ];

// const MyCalendar = () => {
//   return (
//     <div style={{ height: 700 }}>
//       <BigCalendar
//         events={events}
//         step={60}
//         views={allViews}
//         defaultDate={new Date(2015, 3, 1)}
//         popup={false}
//         onShowMore={(events, date) => {
//           // Lógica para mostrar más eventos si es necesario
//         }}
//       />
//     </div>
//   );
// };

// export default MyCalendar;





// // OLD

// import React from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import { Button, Card, CardContent } from '@mui/material';
// import { red } from '@mui/material/colors';




// import { makeStyles } from '@mui/material/styles';
// // import styled from '@mui/material/styles';

// import { styled } from '@mui/system'; // Importa styled de @mui/system


// const StyledCalendarContainer = styled('div')`
//   /* Estilos para el contenedor del calendario */
// `;

// const StyledEvent = styled('div')`
//   /* Estilos para los eventos del calendario */
//   background-color: ${red[500]}; // Fondo en rojo
//   color: white; // Texto en blanco
// `;



// // const useStyles = styled((theme) => ({
// //   calendarContainer: {
// //     // Estilos para el contenedor del calendario
// //   },
// //   event: {
// //     // Estilos para los eventos del calendario
// //     backgroundColor: red[500], // Por ejemplo, establece el fondo en rojo
// //     color: 'white', // Texto en blanco
// //   },
// // }));





// // Configura el localizador de fechas usando moment.js
// const localizer = momentLocalizer(moment);

// // Eventos de ejemplo (reemplázalos con tus propios datos)
// const events = [
//   {
//     title: 'Cita de masaje',
//     start: new Date(2023, 9, 1, 10, 0), // Fecha y hora de inicio
//     end: new Date(2023, 9, 1, 11, 0),   // Fecha y hora de finalización
//   },
//   // Agrega más eventos aquí
// ];

// function MyCalendar() {
//   return (
//     <Card>
//       <CardContent>
//         <StyledCalendarContainer>
//           <Calendar
//             localizer={localizer}
//             events={events}
//             startAccessor="start"
//             endAccessor="end"
//             // eventPropGetter={(event) => ({
//             //   className: StyledEvent, // Utiliza el componente estilizado para los eventos
//             // })}
//             style={{ height: 500 }}
//           />
//         </StyledCalendarContainer>
//       </CardContent>
//     </Card>
//   );
// }


// export default MyCalendar;


