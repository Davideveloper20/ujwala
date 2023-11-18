import React, { createContext, useContext, useState, useEffect } from "react";
import {
  createEvent,
  fetchEvents,
  deleteEvent,
  updateEvent,
} from "../utils/api";

interface Event {
  _id?: string;
  title?: string;
  bgColor?: string;
  description?: string;
  hours?: number;
  start: string;
  end: string;
}

interface EventContextType {
  events: Event[];
  open: boolean;
  selectedEvent: Event | null;
  formType: string;
  saveEvent: (data: Event) => Promise<any>;
  editEvent: (data: Event) => Promise<any>;
  removeEvent: () => Promise<any>;
  handleClickOpen: (event?: Event | null) => void;
  handleClose: () => void;
  setSelectedEvent: React.Dispatch<React.SetStateAction<any | null>>;

  setFormType: React.Dispatch<React.SetStateAction<string>>;
}

export const EventContext = createContext<EventContextType | undefined>(
  undefined
);

const newObj: Event = {
  _id: "",
  title: "",
  bgColor: "",
  description: "",
  hours: 0,
  start: "",
  end: "",
};

const reformatItems = (events: Event[]): Event[] => {
  return events.map(function (event) {
    newObj["_id"] = event._id;
    newObj["title"] = event.title;
    newObj["bgColor"] = event.bgColor;
    newObj["description"] = event.description;
    newObj["hours"] = event.hours;
    newObj["start"] = new Date(Date.parse(event.start))
      .toISOString()
      .slice(0, 16);
    newObj["end"] = new Date(Date.parse(event.end)).toISOString().slice(0, 16);
    return newObj;
  });
};

const fixDatesAsIso = (event: any): any => {
  const starter = new Date(Date.parse(event.start));
  starter.setMinutes(starter.getMinutes() - starter.getTimezoneOffset());
  const ender = new Date(Date.parse(event.end));
  ender.setMinutes(ender.getMinutes() - ender.getTimezoneOffset());

  return {
    start: starter.toISOString().slice(0, 16),
    end: ender.toISOString().slice(0, 16),
  };
};

const fixDatesAsTimestamps = (event: Event): Event => {
  const starter = new Date(event.start);
  starter.setMinutes(starter.getMinutes() - starter.getTimezoneOffset());
  const ender = new Date(event.end);
  ender.setMinutes(ender.getMinutes() - ender.getTimezoneOffset());

  return {
    start: String(starter),
    end: String(ender),
  };
};

const EventProvider = ({ children }: any) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event>({
    _id: "",
    title: "",
    description: "",
    hours: 0,
    start: "",
    end: "",
    bgColor: "",
  });
  const [open, setOpen] = useState(false);
  const [formType, setFormType] = useState("");

  const handleClickOpen = (event: any = null) => {
    try {
      setOpen(true);
      if (event === null) {
        setFormType("add");
      } else if (
        event.hasOwnProperty("start") &&
        event.hasOwnProperty("end") &&
        !event.hasOwnProperty("title") &&
        !event.hasOwnProperty("description")
      ) {
        setFormType("add");
        const stamps = fixDatesAsIso(event);
        setSelectedEvent(stamps);
        console.log("timeslot", stamps);
      } else {
        const stamps = fixDatesAsTimestamps(event);
        setSelectedEvent({ ...stamps, ...event });
        console.log("selectExisting", selectedEvent);
        setFormType("show");
      }
    } catch (e) {
      alert("handleClickOpen: ");
    }
  };

  const handleClose = () => {
    setFormType("");

    setSelectedEvent({} as Event);

    setOpen(false);
  };

  const init = async () => {
    try {
      const events = await fetchEvents();
      const newItems = reformatItems(events);
      console.log("init: ", newItems);
      setEvents(newItems);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const saveEvent = async (data: any) => {
    const payload = {
      title: data.title,
      description: data.description,
      bgColor: data.bgColor,
      start: data.start,
      end: data.end,
      _id: data._id,
      hours: data.hours,
    };
    const adjustPayload = fixDatesAsTimestamps(payload);
    const newEvent = await createEvent({ ...adjustPayload, ...payload });
    const reformatItem = reformatItems([newEvent.event]);
    if (newEvent.success) {
      setEvents([
        ...events,
        {
          ...reformatItem[0],
        },
      ]);
    }
    return newEvent;
  };

  const editEvent = async (data: any) => {
    const res = await updateEvent(selectedEvent._id, data);
    const reformatItem = fixDatesAsTimestamps(res.event);
    const foundEvent = events.filter((event) => {
      if (event._id === res.event._id) {
        const newObject = { ...reformatItem, ...event };
        const index = events.indexOf(event);
        events.splice(index, 1);
        setEvents([...events, newObject]);
      }
    });
    if (foundEvent) {
      handleClose();
      init();
    }
    return reformatItem;
  };

  const removeEvent = async () => {
    const newEvent = await deleteEvent(selectedEvent._id);
    if (newEvent.success) {
      handleClose();
      init();
    }
    return newEvent;
  };

  return (
    <EventContext.Provider
      value={{
        events,
        open,
        saveEvent,
        editEvent,
        removeEvent,
        handleClickOpen,
        handleClose,
        selectedEvent,
        setSelectedEvent,
        formType,
        setFormType,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;

export function useEventContext() {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext debe usarse dentro de EventProvider");
  }
  return context;
}
