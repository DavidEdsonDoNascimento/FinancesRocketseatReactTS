export abstract class DateFormat {
    public static toBrazilian(dateInput: string | Date): string {
        let date = !(dateInput instanceof Date) ? new Date(dateInput) : dateInput;
        return new Intl.DateTimeFormat('pt-BR').format(date);
    }
}