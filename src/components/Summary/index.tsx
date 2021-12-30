import incomeSVG from './../../assets/income.svg'
import outcomeSVG from './../../assets/outcome.svg'
import totalSVG from './../../assets/total.svg'
import { BoxMovement } from '../BoxMovement'
import { Container } from './styles'
import { TransactionTypes } from '../../types/Transaction'
import { useTransactions } from '../../hooks/useTransactions'

export const Summary = () => {

  const { transactions } = useTransactions();

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