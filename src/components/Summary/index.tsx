import incomeSVG from './../../assets/income.svg'
import outcomeSVG from './../../assets/outcome.svg'
import totalSVG from './../../assets/total.svg'
import { BoxMovement } from '../BoxMovement'
import { Container } from './styles'
import { useContext, useEffect } from 'react'
import { TransactionsContext } from '../../TransactionsContext'
import { TransactionTypes } from '../../types/Transaction'

export const Summary = () => {

  const { transactions } = useContext(TransactionsContext)

  const totals = transactions.reduce((accumulator, transaction) => {
    if (TransactionTypes.DEPOSIT === transaction.type) {
      accumulator.deposits += transaction.amount;
      accumulator.total += transaction.amount;
      return accumulator;
    }
    accumulator.withdraws += transaction.amount;
    accumulator.total -= transaction.amount;
    return accumulator;
  }, { deposits: 0, withdraws: 0, total: 0 });


  return (
    <Container>
      <BoxMovement title="Entradas" imgSettings={{ src: incomeSVG, alt: 'Entradas' }} value={totals.deposits} />
      <BoxMovement title="Saídas" imgSettings={{ src: outcomeSVG, alt: 'Saídas' }} value={totals.withdraws * -1} />
      <BoxMovement title="Total" imgSettings={{ src: totalSVG, alt: 'Total' }} value={totals.total} />
    </Container>
  );
}