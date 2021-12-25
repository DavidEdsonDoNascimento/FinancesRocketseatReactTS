import { TransactionInput } from '../../types/Transaction'
import { Container } from './styles'

type TransactionValid = {
    isValid: boolean;
    invalidEntries: string[]
}

export const ModalMessage = () => {
    
    const isTransactionValid = (transaction: TransactionInput) => {
        
        const transactionValid: TransactionValid = {
            isValid: true,
            invalidEntries: []
        }

        if (!transaction?.title) {
            transactionValid.invalidEntries.push('Titulo')
        }
        
        if (!transaction?.amount) {
            transactionValid.invalidEntries.push('Quantidade')
        }

        if (!transaction?.category) {
            transactionValid.invalidEntries.push('Categoria')
        }

        transactionValid.isValid = !transactionValid.invalidEntries.length;

        return transactionValid;
    }

    return (<Container></Container>)
}
