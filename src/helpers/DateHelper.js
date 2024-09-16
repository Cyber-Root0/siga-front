/**
 * @fileoverview Integração de um Front-End em React com a API do Siga (PHP)
 * @author Bruno Venancio Alves
 * @contact boteistem@gmail.com
 *
 * Copyright (c) 2024 Bruno Venancio Alves
 * 
 * Permission is granted to use, copy, modify, and distribute this software,
 * provided that this notice remains in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
 */
class DateHelper {
    getNextDayOfWeek(dayOfWeek) {
        const daysOfWeekMap = {
            "domingo": 0,
            "segunda": 1,
            "terca": 2,
            "quarta": 3,
            "quinta": 4,
            "sexta": 5,
            "sabado": 6
        };
        const today = new Date();
        const resultDate = new Date();
        const day = daysOfWeekMap[dayOfWeek];

        resultDate.setDate(today.getDate() + ((day - today.getDay() + 7) % 7));
        return resultDate;
    }
    formatDate(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return new Date(`${year}/${month}/${day} ${hours}:${minutes}`);
    }
    getStartAndEndTime(day, timeRange) {
        const [startTime, endTime] = timeRange.split("-");
        const [startHour, startMinute] = startTime.split(":").map(Number);
        const [endHour, endMinute] = endTime.split(":").map(Number);

        let startDate = new Date(day);
        startDate.setHours(startHour, startMinute);

        let endDate = new Date(day);
        endDate.setHours(endHour, endMinute);

        startDate = this.formatDate(startDate);
        endDate = this.formatDate(endDate);

        return { startDate, endDate };
    }
    parseTime(timeStr) {
        const [startTime] = timeStr.split('-');
        const [hours, minutes] = startTime.split(':').map(Number);
        return hours * 60 + minutes;
    }
}
export default DateHelper;
