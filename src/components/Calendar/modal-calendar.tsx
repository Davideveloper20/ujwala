// NEW 2

import React, { useEffect, useState } from "react";

import {
  Stack,
  TextField,
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Divider,
  Typography,
} from "@mui/material";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import { createUserAppointment } from "@/services/create-user-appointment";

interface ModalCalendarProps {
  fromRequest: boolean;
  detail?: string;
}

export default function ModalCalendar({
  fromRequest,
  detail,
}: ModalCalendarProps) {
  const [selectedDateDetails, setSelectedDateDetails] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    massageType: "",
    status: "programada",
  });
  useEffect(() => {
    if (fromRequest) {
      setConfirm(true);
      if (detail !== "") {
        setSelectedDateDetails({
          ...selectedDateDetails,
          massageType: detail,
        });
      }
    }
  }, [fromRequest]);
  const [selectedDate, setSelectedDate] = useState("");

  const [confirm, setConfirm] = useState(false);

  const [isTimeSelected, setIsTimeSelected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalOpenSuccess, setIsModalOpenSuccess] = useState(false);

  const [isModalOpenDate, setIsModalOpenDate] = useState(true);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);

    newDate.setMinutes(newDate.getMinutes() - newDate.getTimezoneOffset());

    const formattedDate = newDate.toISOString().substring(0, 16);

    setSelectedDateDetails({ ...selectedDateDetails, date: formattedDate });

    const newDateTime = event.target.value;
    const [datePart, timePart] = newDateTime.split("T");
    const [hour, minute] = timePart.split(":");

    let period = "AM";
    const numericHour = parseInt(hour, 10);

    if (numericHour >= 12) {
      period = "PM";
    }

    if (period === "AM") {
      // setConfirm(true);
      setIsModalOpen(true);
      setIsModalOpenDate(false);

      // Acciones para la elección de AM
      console.log("El usuario eligió AM");
    }

    // if (period === "AM") {
    //   // setConfirm(true);
    //   setIsModalOpen(true);
    //   // setIsModalOpenDate(false);

    //   // Acciones para la elección de AM
    //   console.log("El usuario eligió AM");
    // } else {
    //   // Acciones para la elección de PM
    //   console.log("El usuario eligió PM");

    //   setIsModalOpen(true);
    //   // setIsModalOpenDate(false);

    //   // setConfirm(true);
    // }

    // setIsModalOpen(true);
  };

  const handleSaveDetails = async () => {
    try {
      const data: any = await createUserAppointment(selectedDateDetails);
      console.log("Usuario y cita creados:", data);
    } catch (error) {
      console.error("Error al crear usuario y cita:", error);
    }
    setIsModalOpen(false);
    setIsModalOpenSuccess(true);
  };

  const handleConfirm = (event: SelectChangeEvent) => {
    console.log("MI TYPEE", event.target.value);
    setSelectedDateDetails({
      ...selectedDateDetails,
      massageType: event.target.value,
    });

    setConfirm(true);
  };

  return (
    <>
      <Dialog open={isModalOpenDate} onClose={() => setIsModalOpenDate(false)}>
        {!fromRequest ? (
          <DialogTitle sx={{ background: "#000", color: "#fff" }}>
            Ingresa tu masaje y fecha
          </DialogTitle>
        ) : (
          <DialogTitle sx={{ background: "#000", color: "#fff" }}>
            Ingresa la fecha de cita
          </DialogTitle>
        )}

        <Divider sx={{ width: "100%" }} />
        <DialogContent>
          <Stack component="form" noValidate spacing={4} p={2}>
            {!fromRequest && (
              <Box width="100%">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Tipo de Masaje
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Massage Type"
                    value={selectedDateDetails.massageType}
                    onChange={handleConfirm}
                  >
                    <MenuItem value="ujwala_signature">
                      Ujwala Signature
                    </MenuItem>
                    <MenuItem value="le_grand_muka">Le Grand Muka</MenuItem>
                    <MenuItem value="miolift fascia 3d">
                      Miolift Fascia 3D
                    </MenuItem>
                    <MenuItem value="muka_tridoshiko">Muka Tridoshiko</MenuItem>
                    <MenuItem value="gua_sha_sagrada">Gua Sha Sagrada</MenuItem>
                    <MenuItem value="prana_profundo">Prana Profundo</MenuItem>
                    <MenuItem value="massage_four">Experiencia grupal</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            )}
            {/* )} */}
            <DialogActions>
              {confirm && (
                <TextField
                  id="datetime-local"
                  label="Fecha y hora"
                  type="datetime-local"
                  value={
                    selectedDateDetails.date
                      ? selectedDateDetails.date.toString().substring(0, 16)
                      : ""
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleTimeChange}
                />
              )}
            </DialogActions>
          </Stack>
        </DialogContent>
      </Dialog>

      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogTitle sx={{ background: "#000", color: "#fff" }}>
          Ingresa tus datos y quedarás agendada
        </DialogTitle>
        <Divider sx={{ width: "100%" }} />
        <DialogContent>
          <Stack width="100%" direction="column" spacing={2} mt={2}>
            <TextField
              label="Nombre y apellido"
              fullWidth
              value={selectedDateDetails.name}
              onChange={(e) =>
                setSelectedDateDetails({
                  ...selectedDateDetails,
                  name: e.target.value,
                })
              }
            />
            <TextField
              label="Teléfono"
              fullWidth
              value={selectedDateDetails.phone}
              onChange={(e) =>
                setSelectedDateDetails({
                  ...selectedDateDetails,
                  phone: e.target.value,
                })
              }
            />
            <TextField
              label="Correo electrónico"
              fullWidth
              value={selectedDateDetails.email}
              onChange={(e) =>
                setSelectedDateDetails({
                  ...selectedDateDetails,
                  email: e.target.value,
                })
              }
            />

            <DialogActions>
              <Stack direction="row" spacing={2}>
                <Button
                  onClick={handleSaveDetails}
                  sx={{
                    background: "#fff",
                    border: "1px solid #fff",
                    fontWeight: "900",
                    color: "#000",

                    "&:hover": { background: "hsl(0deg 0% 0% / 16%)" },
                  }}
                >
                  Guardar
                </Button>
                <Button
                  onClick={() => setIsModalOpen(false)}
                  sx={{
                    background: "#fff",
                    border: "2px solid #fff",
                    fontWeight: "900",
                    color: "#000",

                    "&:hover": { background: "hsl(0deg 0% 0% / 16%)" },
                  }}
                >
                  Cancelar
                </Button>
              </Stack>
            </DialogActions>
          </Stack>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isModalOpenSuccess}
        onClose={() => setIsModalOpenSuccess(false)}
      >
        <DialogTitle sx={{ background: "#000", color: "#fff" }}>
          Gracias por hacer parte de UJWALA
        </DialogTitle>
        <Divider sx={{ width: "100%" }} />
        <DialogContent>
          <Stack width="100%" direction="column" spacing={2} mt={2}>
            <Typography variant="body1" textAlign="justify">
              Hemos enviado un email a {selectedDateDetails.email} , donde se
              encuentra toda la información de la cita y la realización del
              pago. Que tengas un bonito día!
            </Typography>

            <DialogActions>
              <Stack direction="row" spacing={2}>
                <Button
                  onClick={() => setIsModalOpenSuccess(false)}
                  sx={{
                    background: "#fff",
                    border: "1px solid #fff",
                    fontWeight: "900",

                    color: "#000",

                    "&:hover": { background: "hsl(0deg 0% 0% / 16%)" },
                  }}
                >
                  Entendido
                </Button>
              </Stack>
            </DialogActions>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
}

// // NEW 2

// import React, { useEffect, useState } from "react";

// import {
//   Stack,
//   TextField,
//   Button,
//   Grid,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   Box,
//   FormControl,
//   InputLabel,
//   MenuItem,
// } from "@mui/material";

// import Select, { SelectChangeEvent } from "@mui/material/Select";
// import { createUserAppointment } from "@/services/create-user-appointment";

// export default function ModalCalendar() {

//   const [selectedDate, setSelectedDate] = useState("");

//   const [confirm, setConfirm] = useState(false);

//   const [isTimeSelected, setIsTimeSelected] = useState(false); // Un estado para rastrear si se ha seleccionado la hora
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const [selectedDateDetails, setSelectedDateDetails] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     date: "",
//     massageType: "",
//     status: "programada",
//   });

//   const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newDate = new Date(event.target.value);

//     // Establece la zona horaria en UTC
//     newDate.setMinutes(newDate.getMinutes() - newDate.getTimezoneOffset());

//     // Formatea la fecha y hora en el formato esperado por TextField
//     const formattedDate = newDate.toISOString().substring(0, 16);

//     setSelectedDateDetails({ ...selectedDateDetails, date: formattedDate });

//     const newDateTime = event.target.value;
//     const [datePart, timePart] = newDateTime.split("T");
//     const [hour, minute] = timePart.split(":");

//     let period = "AM";
//     const numericHour = parseInt(hour, 10);

//     if (numericHour >= 12) {
//       period = "PM";
//     }

//     // Realizar acciones en función de AM o PM
//     if (period === "AM") {
//       setConfirm(true);
//       // Acciones para la elección de AM
//       console.log("El usuario eligió AM");
//     } else {
//       // Acciones para la elección de PM
//       console.log("El usuario eligió PM");

//       setConfirm(true);
//     }
//   };

//   const handleSaveDetails = async () => {
//     // Procesa y guarda los detalles ingresados por el usuario aquí, por ejemplo, en el estado de la aplicación.
//     // Puedes acceder a selectedDateDetails para obtener los datos.
//     // Luego, cierra el modal.

//     try {
//       const data: any = await createUserAppointment(selectedDateDetails);
//       console.log("Usuario y cita creados:", data);
//       // Realizar cualquier acción adicional después de crear el usuario y la cita
//     } catch (error) {
//       console.error("Error al crear usuario y cita:", error);
//     }
//     setIsModalOpen(false);
//   };

//   const handleConfirm = (event: SelectChangeEvent) => {
//     console.log("MI TYPEE", event.target.value);
//     setSelectedDateDetails({
//       ...selectedDateDetails,
//       massageType: event.target.value,
//     });

//     setIsModalOpen(true);
//   };

//   return (
//     <>
//       <Stack component="form" noValidate spacing={3}>
//         <TextField
//           id="datetime-local"
//           label="Next appointment"
//           type="datetime-local"
//           value={
//             selectedDateDetails.date
//               ? selectedDateDetails.date.toString().substring(0, 16)
//               : ""
//           }
//           sx={{ width: 250 }}
//           InputLabelProps={{
//             shrink: true,
//           }}
//           onChange={handleTimeChange} // Cambia el evento al cambio de hora
//         />

//         {confirm && (
//           <Box sx={{ minWidth: 120 }}>
//             <FormControl fullWidth>
//               <InputLabel id="demo-simple-select-label">
//                 Tipo de Masaje
//               </InputLabel>
//               <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 label="Massage Type"
//                 value={selectedDateDetails.massageType}
//                 onChange={handleConfirm}
//               >
//                 <MenuItem value="holistic_massage">Masaje holístico</MenuItem>
//                 <MenuItem value="massage_two">Masaje armonía natural</MenuItem>
//                 <MenuItem value="massage_three">Masaje de luna llena</MenuItem>
//                 <MenuItem value="massage_four">Experiencia grupal</MenuItem>
//               </Select>
//             </FormControl>
//           </Box>
//         )}
//       </Stack>

//       <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <DialogTitle>Ingrese sus datos para agendar su cita</DialogTitle>
//         <DialogContent>
//           <Stack direction="column" spacing={2} mt={2}>
//             <TextField
//               label="Nombre"
//               fullWidth
//               value={selectedDateDetails.name}
//               onChange={(e) =>
//                 setSelectedDateDetails({
//                   ...selectedDateDetails,
//                   name: e.target.value,
//                 })
//               }
//             />
//             <TextField
//               label="Teléfono"
//               fullWidth
//               value={selectedDateDetails.phone}
//               onChange={(e) =>
//                 setSelectedDateDetails({
//                   ...selectedDateDetails,
//                   phone: e.target.value,
//                 })
//               }
//             />
//             <TextField
//               label="Correo electrónico"
//               fullWidth
//               value={selectedDateDetails.email}
//               onChange={(e) =>
//                 setSelectedDateDetails({
//                   ...selectedDateDetails,
//                   email: e.target.value,
//                 })
//               }
//             />
//           </Stack>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleSaveDetails} color="primary">
//             Guardar
//           </Button>
//           <Button onClick={() => setIsModalOpen(false)} color="primary">
//             Cancelar
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }
