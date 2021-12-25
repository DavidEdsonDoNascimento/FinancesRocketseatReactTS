export type Transaction = {
    id: number;
    title: string;
    amount: number;
    type: 'deposit' | 'withdraw';
    category: 'project' | 'rent' | 'food' | '';
    createdAt: Date;
}

export type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

export enum TransactionTypes {
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw'
}

export type Category = {
    [tag: string]: {
        title: string;
        key: 'food' | 'rent' | 'project'
    }
}

export const TransactionCategories: Category = {
    food: {
        title: 'Alimentação',
        key: 'food'
    },
    rent: {
        title: 'Aluguel',
        key: 'rent'
    },
    project: {
        title: 'Projetos',
        key: 'project'
    }
}