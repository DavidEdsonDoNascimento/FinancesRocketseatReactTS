import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { useTransactions } from '../../hooks/useTransactions'
import { api } from '../../services/api'
import { Transaction, TransactionInput, TransactionCategories } from '../../types/Transaction'
import { ModalMessage } from '../ModalMessage'
import CloseSVG from './../../assets/close.svg'
import IncomeSVG from './../../assets/income.svg'
import OutcomeSVG from './../../assets/outcome.svg'

import { Container, RadioBox, TransactionTypeContainer } from './styles'

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}



export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {

    const [transactionTitle, setTransactionTitle] = useState('')
    const [transactionValue, setTransactionValue] = useState(0)
    const [transactionCategory, setTransactionCategory] = useState('')
    const [transactionModalAlert, setTransactionModalAlert] = useState('')
    const [transactionType, setTransactionType] = useState('deposit')
    const { createTransaction } = useTransactions()

    const handleCreateNewTransaction = async (event: FormEvent) => {


        event.preventDefault()

        const newTransaction: TransactionInput = {
            title: transactionTitle,
            amount: transactionValue,
            type: transactionType === 'deposit' ? 'deposit' : 'withdraw',
            category: transactionCategory ? TransactionCategories[transactionCategory].key : ''
        }

        // const { isValid, invalidEntries } = isTransactionValid(newTransaction)

        // if (!isValid) {
        //     const tr = `
        //     <h4>Campos Obrigatórios</h4>
        //     <ul>
        //         ${invalidEntries.map(ie => `<li>${ie}</li>`)}
        //     </ul>
        //     `

        //     setTransactionModalAlert(tr)
        //     return;
        // }

        await createTransaction(newTransaction);

        clearInputs()
        onRequestClose()

    }

    const clearInputs = () => {
        setTransactionTitle('')
        setTransactionValue(0)
        setTransactionCategory('')
        setTransactionType('deposit')
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <ModalMessage />
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close">

                <img src={CloseSVG} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Título"
                    value={transactionTitle}
                    onChange={event => setTransactionTitle(event.target.value)}
                />
                <input
                    placeholder="Valor"
                    type="number"
                    value={transactionValue}
                    onChange={event => setTransactionValue(Number(event.target.value))}
                />
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setTransactionType('deposit') }}
                        isActive={transactionType === 'deposit'}
                        activeColor="green"
                    >
                        <img src={IncomeSVG} alt="entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => { setTransactionType('withdraw') }}
                        isActive={transactionType === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={OutcomeSVG} alt="saida" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <select value={transactionCategory} onChange={event => setTransactionCategory(event.target.value)}>
                    <option value="">Selecione ...</option>
                    {Object.keys(TransactionCategories).map(key => <option key={key} value={key}>{TransactionCategories[key].title}</option>)}
                </select>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}