const dataMengajarController = require('./dataMengajarController');

class TimeSlot {
  constructor(day, startHour, startMinute) {
    this.day = day;
    this.startHour = startHour;
    this.startMinute = startMinute;
  }

  toString(useIndonesian = false) {
    const days = useIndonesian 
      ? ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'] 
      : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    return `${days[this.day]} ${this.startHour.toString().padStart(2, '0')}:${this.startMinute.toString().padStart(2, '0')}`;
  }
}

// ... (Class dan Schedule tetap sama)

function generateTimeSlots() {
  const timeSlots = [];
  for (let day = 0; day < 5; day++) {
    for (let hour = 8; hour < 18; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        timeSlots.push(new TimeSlot(day, hour, minute));
      }
    }
  }
  return timeSlots;
}

exports.generateSchedule = async (req, res) => {
  try {
    const useIndonesian = req.query.lang === 'id'; // Tambahkan parameter query untuk memilih bahasa
    const dataMengajar = await dataMengajarController.getDataMengajar();
    const classes = dataMengajar.map(data => new Class(
      data.id,
      data.subject,
      data.teacher,
      data.room,
      data.hoursRequired,
      data.meetingsPerWeek || 1
    ));

    const availableTimeSlots = generateTimeSlots();
    const initialSchedule = new Schedule(classes);
    initialSchedule.assignRandomTimeSlots(availableTimeSlots);

    const bestSchedule = simulatedAnnealing(initialSchedule, 10000, 1000, 0.995);

    const scheduleSummary = bestSchedule.classes.map(c => ({
      id: c.id,
      timeSlots: c.assignedTimeSlots.map(slot => slot.toString(useIndonesian))
    }));

    const scheduleDetails = bestSchedule.classes.map(c => ({
      id: c.id,
      subject: c.subject,
      teacher: c.teacher,
      room: c.room,
      timeSlots: c.assignedTimeSlots.map(slot => slot.toString(useIndonesian))
    }));

    res.json({
      scheduleSummary,
      scheduleDetails,
      conflicts: bestSchedule.calculateConflicts()
    });
  } catch (error) {
    console.error('Error generating schedule:', error);
    res.status(500).json({ message: 'Error generating schedule', error: error.message });
  }
};