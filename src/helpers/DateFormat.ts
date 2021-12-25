const nationality = 'pt-BR'

export const DateBrazilian = (date: string) => {
    return new Intl.DateTimeFormat(nationality).format(new Date(date))
}