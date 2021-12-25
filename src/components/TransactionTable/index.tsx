import { useContext } from 'react'
import { TransactionsContext } from '../../TransactionsContext'
import { Container } from './styles'
import { TransactionCategories } from '../../types/Transaction'

export const TransactionTable = () => {

    const { transactions } = useContext(TransactionsContext)

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
                                <td>{item.createdAt}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Container>
    );
}