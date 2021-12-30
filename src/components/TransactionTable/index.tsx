import { Container } from './styles'
import { TransactionCategories } from '../../types/Transaction'
import { DateFormat } from '../../helpers/DateFormat'
import { useTransactions } from '../../hooks/useTransactions'

export const TransactionTable = () => {

    const { transactions } = useTransactions()

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td className={item.type}>{item.amount}</td>
                                <td>{TransactionCategories[item.category].title}</td>
                                <td>{DateFormat.toBrazilian(item.createdAt)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Container>
    );
}