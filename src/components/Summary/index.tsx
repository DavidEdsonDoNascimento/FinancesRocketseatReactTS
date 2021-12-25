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
  // const [summary, setSummary] = useState()

  const calculateEntries = () => {
    const entries: any[] = []
    const outputs: any[] = []

    transactions.filter(e => e.type === TransactionTypes.DEPOSIT ? entries.push(e) : outputs.push(e))


    console.log('Entradas: ', entries)
    console.log('Saidas: ', outputs)
  }


  return (
    <Container>
      <BoxMovement title="Entradas" imgSettings={{ src: incomeSVG, alt: 'Entradas' }} value="1000" />
      <BoxMovement title="Saídas" imgSettings={{ src: outcomeSVG, alt: 'Saídas' }} value="500" />
      <BoxMovement title="Total" imgSettings={{ src: totalSVG, alt: 'Total' }} value="500" />
    </Container>
  );
}