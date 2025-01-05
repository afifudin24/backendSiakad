const DataMengajar = require('../models/dataMengajarModel');

// Day mapping
const DAYS = ['', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at"];
const ANNEALING_CONFIG = {
  MAX_ITERATIONS: 10000,
  INITIAL_TEMPERATURE: 1000,
  COOLING_RATE: 0.995,
};

// Time configuration
const TIME_CONFIG = {
  REGULAR_DAY: {
    START_TIME: '07:00',
    FIRST_BREAK: { START: '08:55', END: '09:10' },
    SECOND_BREAK: { START: '12:00', END: '12:20' },
    END_TIME: '14:40',
    PERIODS_BEFORE_FIRST_BREAK: 3,
    PERIODS_BEFORE_SECOND_BREAK: 7,
    TOTAL_PERIODS: 10,
  },
  FRIDAY: {
    START_TIME: '07:00',
    FIRST_BREAK: { START: '09:00', END: '09:20' },
    END_TIME: '11:20',
    PERIODS_BEFORE_BREAK: 3,
    TOTAL_PERIODS: 6,
  },
  PERIOD_DURATION: 40,
};

class TimeSlot {
  constructor(day, periodNumber, startTime, duration) {
    this.day = day;
    this.periodNumber = periodNumber;
    this.startTime = startTime;
    this.duration = duration; // This will now vary based on hoursPerWeek/meetingsPerWeek
  }

  formatTime() {
    const start = this.startTime;
    const end = new Date(start.getTime() + this.duration * 60000);
    return {
      start: start.toTimeString().slice(0, 5),
      end: end.toTimeString().slice(0, 5),
    };
  }

  getPeriodNumber() {
    return this.periodNumber;
  }

  getDay() {
    return DAYS[this.day];
  }

  // Add method to get number of periods this slot occupies
  getPeriodsOccupied() {
    return Math.ceil(this.duration / TIME_CONFIG.PERIOD_DURATION);
  }
}

class Class {
  constructor(
    id,
    teacherId,
    classId,
    teacherName,
    titleClass,
    levelClass,
    mapelName,
    subjectId,
    teachingHours,
    meetingsPerWeek,
  ) {
    this.id = id;
    this.teacherId = teacherId;
    this.classId = classId;
    this.teacherName = teacherName;
    this.titleClass = titleClass;
    this.levelClass = levelClass;
    this.mapelName = mapelName;
    this.subjectId = subjectId;
    this.hoursPerWeek = teachingHours;
    this.meetingsPerWeek = meetingsPerWeek;
    this.minutesPerMeeting =
      (teachingHours / meetingsPerWeek) * TIME_CONFIG.PERIOD_DURATION;
    this.assignedTimeSlots = [];
  }

  assignTimeSlot(timeSlot) {
    this.assignedTimeSlots.push(timeSlot);
  }

  clearTimeSlots() {
    this.assignedTimeSlots = [];
  }
}

class Schedule {
  constructor(classes) {
    this.classes = classes;
  }

  assignRandomTimeSlots(availableTimeSlots) {
    this.classes.forEach((classItem) => {
      classItem.clearTimeSlots();
      const slotsNeeded = classItem.meetingsPerWeek;

      for (let i = 0; i < slotsNeeded; i++) {
        const availableSlot = this.findRandomAvailableSlot(
          availableTimeSlots,
          classItem,
        );
        if (availableSlot) {
          // Create a new TimeSlot with the calculated duration
          const customDurationSlot = new TimeSlot(
            availableSlot.day,
            availableSlot.periodNumber,
            availableSlot.startTime,
            classItem.minutesPerMeeting,
          );
          classItem.assignTimeSlot(customDurationSlot);
        }
      }
    });
  }

  findRandomAvailableSlot(availableTimeSlots, classItem) {
    const shuffledSlots = [...availableTimeSlots].sort(
      () => Math.random() - 0.5,
    );
    return shuffledSlots.find((slot) => this.isSlotAvailable(slot, classItem));
  }

  isSlotAvailable(slot, classItem) {
    // Calculate how many periods this class needs
    const periodsNeeded = Math.ceil(
      classItem.minutesPerMeeting / TIME_CONFIG.PERIOD_DURATION,
    );

    // Check if there are enough consecutive periods available
    for (let i = 0; i < periodsNeeded; i++) {
      const currentPeriod = slot.periodNumber + i;

      // Check if we're crossing a break or day boundary
      if (this.isCrossingBreak(slot.day, currentPeriod)) {
        return false;
      }

      // Check for conflicts with other classes
      const hasConflict = this.classes.some((c) =>
        c.assignedTimeSlots.some(
          (assignedSlot) =>
            assignedSlot.day === slot.day &&
            assignedSlot.periodNumber <= currentPeriod &&
            currentPeriod <
              assignedSlot.periodNumber + assignedSlot.getPeriodsOccupied() &&
            (c.teacherId === classItem.teacherId ||
              c.classId === classItem.classId),
        ),
      );

      if (hasConflict) {
        return false;
      }
    }

    return true;
  }

  isCrossingBreak(day, period) {
    const isFriday = day === 5;
    const config = isFriday ? TIME_CONFIG.FRIDAY : TIME_CONFIG.REGULAR_DAY;

    if (isFriday) {
      return (
        period > config.PERIODS_BEFORE_BREAK &&
        period <= config.PERIODS_BEFORE_BREAK + 1
      );
    } else {
      return (
        (period > config.PERIODS_BEFORE_FIRST_BREAK &&
          period <= config.PERIODS_BEFORE_FIRST_BREAK + 1) ||
        (period > config.PERIODS_BEFORE_SECOND_BREAK &&
          period <= config.PERIODS_BEFORE_SECOND_BREAK + 1)
      );
    }
  }

  calculateConflicts() {
    let conflicts = 0;
    this.classes.forEach((class1, i) => {
      this.classes.slice(i + 1).forEach((class2) => {
        class1.assignedTimeSlots.forEach((slot1) => {
          const periods1 = slot1.getPeriodsOccupied();
          class2.assignedTimeSlots.forEach((slot2) => {
            const periods2 = slot2.getPeriodsOccupied();

            // Check for overlapping periods
            if (
              slot1.day === slot2.day &&
              ((slot1.periodNumber <= slot2.periodNumber &&
                slot2.periodNumber < slot1.periodNumber + periods1) ||
                (slot2.periodNumber <= slot1.periodNumber &&
                  slot1.periodNumber < slot2.periodNumber + periods2)) &&
              (class1.teacherId === class2.teacherId ||
                class1.classId === class2.classId)
            ) {
              conflicts++;
            }
          });
        });
      });
    });
    return conflicts;
  }

  clone() {
    return new Schedule([...this.classes]);
  }
}
function getTimeFromString(timeStr) {
  const [hours, minutes] = timeStr.split(':').map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0);
  return date;
}

function generateTimeSlots() {
  const timeSlots = [];

  for (let day = 1; day <= 5; day++) {
    const isFriday = day === 5;
    const config = isFriday ? TIME_CONFIG.FRIDAY : TIME_CONFIG.REGULAR_DAY;
    let currentTime = getTimeFromString(config.START_TIME);
    let periodCounter = 1;

    while (periodCounter <= config.TOTAL_PERIODS) {
      // Check for breaks
      const currentTimeStr = currentTime.toTimeString().slice(0, 5);

      if (isFriday) {
        if (periodCounter === config.PERIODS_BEFORE_BREAK + 1) {
          currentTime = getTimeFromString(config.FIRST_BREAK.END);
        }
      } else {
        if (periodCounter === config.PERIODS_BEFORE_FIRST_BREAK + 1) {
          currentTime = getTimeFromString(config.FIRST_BREAK.END);
        } else if (periodCounter === config.PERIODS_BEFORE_SECOND_BREAK + 1) {
          currentTime = getTimeFromString(config.SECOND_BREAK.END);
        }
      }

      timeSlots.push(
        new TimeSlot(
          day,
          periodCounter,
          new Date(currentTime),
          TIME_CONFIG.PERIOD_DURATION,
        ),
      );

      currentTime = new Date(
        currentTime.getTime() + TIME_CONFIG.PERIOD_DURATION * 60000,
      );
      periodCounter++;
    }
  }

  return timeSlots;
}

function simulatedAnnealing(
  initialSchedule,
  maxIterations,
  initialTemp,
  coolingRate,
) {
  let currentSchedule = initialSchedule.clone();
  let bestSchedule = initialSchedule.clone();
  let temperature = initialTemp;

  for (let iteration = 0; iteration < maxIterations; iteration++) {
    const newSchedule = currentSchedule.clone();
    newSchedule.assignRandomTimeSlots(generateTimeSlots());

    const currentConflicts = currentSchedule.calculateConflicts();
    const newConflicts = newSchedule.calculateConflicts();
    const delta = newConflicts - currentConflicts;

    if (delta < 0 || Math.random() < Math.exp(-delta / temperature)) {
      currentSchedule = newSchedule;

      if (newConflicts < bestSchedule.calculateConflicts()) {
        bestSchedule = newSchedule;
      }
    }

    temperature *= coolingRate;
  }

  return bestSchedule;
}

exports.generateSchedule = async (req, res) => {
  try {
    const generateSchedulePromise = new Promise((resolve, reject) => {
      DataMengajar.getDataMengajar((err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });

    const dataMengajar = await generateSchedulePromise;

    const classes = dataMengajar.map(
      (data) =>
        new Class(
          data.datamengajar_id,
          data.guru_id,
          data.kelas_id,
          data.guru_nama,
          data.kelas_nama,
          data.kelas_tingkat,
          data.mapel_nama,
          data.mapel_id,
          data.jamMengajar,
          data.pertemuanPerMinggu || 1,
        ),
    );

    const availableTimeSlots = generateTimeSlots();
    const initialSchedule = new Schedule(classes);
    initialSchedule.assignRandomTimeSlots(availableTimeSlots);

    const bestSchedule = simulatedAnnealing(
      initialSchedule,
      ANNEALING_CONFIG.MAX_ITERATIONS,
      ANNEALING_CONFIG.INITIAL_TEMPERATURE,
      ANNEALING_CONFIG.COOLING_RATE,
    );

    const scheduleDetails = bestSchedule.classes
      .flatMap((c) =>
        c.assignedTimeSlots.map((slot) => {
          const timeInfo = slot.formatTime();
          return {
            mengajar_id: c.id,
            hari: slot.getDay(),
            jam_ke: slot.getPeriodNumber(),
            jam_mulai: timeInfo.start,
            jam_selesai: timeInfo.end,
            hours_per_week: c.hoursPerWeek,
            meetings_per_week: c.meetingsPerWeek,
            duration_minutes: slot.duration,
            teacher_name: c.teacherName, // Added teacher name
            title_class: c.titleClass, // Added class title
            level_class: c.levelClass, // Added class level
            mapel_name: c.mapelName,
          };
        }),
      )
      .sort((a, b) => {
        const dayOrder = DAYS.indexOf(a.hari) - DAYS.indexOf(b.hari);
        return dayOrder !== 0 ? dayOrder : a.jam_ke - b.jam_ke;
      });

    const conflicts = bestSchedule.calculateConflicts();

    res.json({
      schedule: scheduleDetails,
      conflicts,
      status: conflicts === 0 ? 'Optimal' : 'Sub-optimal',
      total_slots: scheduleDetails.length,
    });
  } catch (error) {
    console.error('Error generating schedule:', error);
    res.status(500).json({
      message: 'Error generating schedule',
      error: error.message,
    });
  }
};
