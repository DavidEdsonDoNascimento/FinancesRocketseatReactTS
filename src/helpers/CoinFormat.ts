export abstract class CoinFormat {
    public static toBrazilian(coin: number): string {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(coin);
    }
}