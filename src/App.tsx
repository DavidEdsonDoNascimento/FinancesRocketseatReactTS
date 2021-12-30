import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import { createServer, Model } from 'miragejs'
import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal'
import Modal from 'react-modal'
import { TransactionsProvider } from "./hooks/useTransactions";

// cria api de fornecimento de mock's com miragejs
createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance pão de açucar',
          type: 'deposit',
          category: 'project',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'rent',
          amount: 900,
          createdAt: new Date('2021-02-22 19:32:00')
        },
        {
          id: 3,
          title: 'Mercado',
          type: 'withdraw',
          category: 'food',
          amount: 750,
          createdAt: new Date('2021-03-01 18:59:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

// inclui o HTML da modal dentro da div root
Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }
  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false) 
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
    </TransactionsProvider>
  );
}
