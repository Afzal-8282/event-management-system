// controllers/eventController.js
import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  const { title, description, date } = req.body;
  try {
    const event = new Event({
      title,
      description,
      date,
      createdBy: req.user.id,
    });
    await event.save();
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "name");
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
