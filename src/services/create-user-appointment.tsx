import axios from "axios";

export const createUserAppointment = async (data: any) => {
  try {
    console.log("MI DATA EN CREATERUSEAPPOINTMENT", data);

    const response = await axios.post("http://localhost:3001/api/users", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      date: data.date,
      massageType: data.massageType,
      status: data.status,
    });

    if (response.status === 201) {
      console.log("Usuario y cita creados con éxito:", response.data);
    }
  } catch (error) {
    console.error("Error al crear usuario y cita front:", error);
  }
};
