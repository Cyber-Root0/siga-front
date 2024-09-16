import { ENDPOINTS } from "../Endpoints";
class HorariosService {
    constructor(apiService, cacheService, disciplinaService, dateHelper) {
        this.apiService = apiService;
        this.cacheService = cacheService;
        this.disciplinaService = disciplinaService;
        this.dateHelper = dateHelper;
    }
    async getAllSchedule(uid) {
        if (!uid) {
            uid = this.cacheService.get('token');
        }
        const inCache = this.cacheService.get('horarios');
        if (inCache) {
            return await this.mapData(inCache);
        }
        const aulas = await this.apiService.get(ENDPOINTS.HORARIOS_ALL, { uid });
        const mappedAulas = this.mapAulas(aulas);
        this.cacheService.set('horarios', mappedAulas, 14400);
        return this.mapData(mappedAulas);
    }
    mapAulas(aulas) {
        return Object.keys(aulas).reduce((acc, day) => {
            acc[day] = aulas[day]
                .map(aula => ({
                    time: aula.HORARIO,
                    subject: aula.DISCIPLINA
                }))
                .sort((a, b) => this.dateHelper.parseTime(a.time) - this.dateHelper.parseTime(b.time));
            return acc;
        }, {});
    }
    async mapData(schedule) {
        const events = [];
        let eventId = 1;

        for (const [day, classes] of Object.entries(schedule)) {
            const nextDay = this.dateHelper.getNextDayOfWeek(day);

            for (const { time, subject } of classes) {
                const { startDate, endDate } = this.dateHelper.getStartAndEndTime(nextDay, time);
                const subjectName = await this.disciplinaService.getDisciplinaById(subject);

                events.push({
                    event_id: eventId++,
                    title: subjectName,
                    start: startDate,
                    end: endDate,
                    color: "#D0010D",
                    subtitle: "aaa",
                    editable: false
                });
            }
        }

        return events;
    }
}
export default HorariosService;
