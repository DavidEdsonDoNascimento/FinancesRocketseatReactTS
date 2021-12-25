const nationality = 'pt-BR'

export const CoinBrazilian = (coin: number) => {
    return new Intl.NumberFormat(nationality, {
        style: 'currency',
        currency: 'BRL'
    }).format(coin)
}